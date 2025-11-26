/**
 * Video Tiling Algorithm
 * 
 * Calculates optimal tiling layout for videos with different orientations
 * to maximize screen fill while maintaining aspect ratios.
 */

// Aspect ratios for each orientation (from doorbell.jsx)
const ASPECT_RATIOS = {
  portrait: 360 / 480,    // 0.75
  landscape: 1920 / 1072, // ~1.791
  wide: 770 / 216         // ~3.565
};

/**
 * Count videos by orientation (order-independent)
 */
function countOrientations(videos) {
  const counts = { landscape: 0, portrait: 0, wide: 0 };
  videos.forEach(v => {
    if (v.orientation && counts.hasOwnProperty(v.orientation)) {
      counts[v.orientation]++;
    }
  });
  return counts;
}

/**
 * Calculate optimal tiling layout for videos
 * Order of videos does not matter - layouts are based on orientation counts
 * @param {Array<{orientation: string}>} videos - Array of video objects with orientation
 * @param {number} canvasWidth - Canvas width in pixels
 * @param {number} canvasHeight - Canvas height in pixels
 * @returns {Object} Layout configuration with video positions and metrics
 */
export function calculateOptimalTiling(videos, canvasWidth, canvasHeight) {
  if (!videos || videos.length === 0) {
    return { videos: [], totalArea: 0, efficiency: 0 };
  }

  const numVideos = videos.length;
  const orientationCounts = countOrientations(videos);

  // Single video - full screen
  if (numVideos === 1) {
    return calculateSingleVideoLayout(videos[0], canvasWidth, canvasHeight);
  }

  // Two videos - order independent
  if (numVideos === 2) {
    return calculateTwoVideoLayout(orientationCounts, videos, canvasWidth, canvasHeight);
  }

  // Three videos - order independent
  if (numVideos === 3) {
    return calculateThreeVideoLayout(orientationCounts, videos, canvasWidth, canvasHeight);
  }

  // Four videos - order independent
  if (numVideos === 4) {
    return calculateFourVideoLayout(orientationCounts, videos, canvasWidth, canvasHeight);
  }

  // Fallback for more than 4 videos
  return { videos: [], totalArea: 0, efficiency: 0 };
}

function calculateSingleVideoLayout(video, canvasWidth, canvasHeight) {
  const aspectRatio = ASPECT_RATIOS[video.orientation];
  
  let width, height;
  const canvasAspect = canvasWidth / canvasHeight;

  if (aspectRatio > canvasAspect) {
    // Video is wider than canvas - fit to width
    width = canvasWidth;
    height = canvasWidth / aspectRatio;
  } else {
    // Video is taller than canvas - fit to height
    height = canvasHeight;
    width = canvasHeight * aspectRatio;
  }

  return {
    videos: [{
      x: (canvasWidth - width) / 2,
      y: (canvasHeight - height) / 2,
      width,
      height,
      orientation: video.orientation
    }],
    totalArea: width * height,
    efficiency: (width * height) / (canvasWidth * canvasHeight) * 100
  };
}

function calculateTwoVideoLayout(orientationCounts, videos, canvasWidth, canvasHeight) {
  // Portrait rules: portraits always in left column, other videos in right column
  if (orientationCounts.portrait > 0) {
    return calculatePortraitLayout(orientationCounts, videos, canvasWidth, canvasHeight);
  }
  
  // Get orientations (order independent - use counts to determine best layout)
  const orientations = [];
  if (orientationCounts.landscape > 0) orientations.push('landscape');
  if (orientationCounts.wide > 0) orientations.push('wide');
  
  const or1 = orientations[0] || videos[0].orientation;
  const or2 = orientations[1] || videos[1].orientation;
  const ar1 = ASPECT_RATIOS[or1];
  const ar2 = ASPECT_RATIOS[or2];
  
  // Special case: LW (Landscape + Wide) - stack them on top of each other
  if (orientationCounts.landscape === 1 && orientationCounts.wide === 1) {
    const landscapeAR = ASPECT_RATIOS.landscape;
    const wideAR = ASPECT_RATIOS.wide;
    
    // Calculate optimal layout: both videos use 100% width
    const optimalWidth = canvasWidth;
    const landscapeHeight = optimalWidth / landscapeAR;
    const wideHeight = optimalWidth / wideAR;
    const totalOptimalHeight = landscapeHeight + wideHeight;
    
    // If optimal height fits, use it; otherwise scale proportionally
    let finalLandscapeHeight, finalWideHeight, finalWidth;
    if (totalOptimalHeight <= canvasHeight) {
      finalLandscapeHeight = landscapeHeight;
      finalWideHeight = wideHeight;
      finalWidth = optimalWidth;
    } else {
      // Scale proportionally to fit canvas height
      // When scaling heights, we must also scale widths to maintain aspect ratio
      const scale = canvasHeight / totalOptimalHeight;
      finalLandscapeHeight = landscapeHeight * scale;
      finalWideHeight = wideHeight * scale;
      // Recalculate width from scaled height to maintain aspect ratio
      // Both videos will have the same width (scaled from optimal)
      finalWidth = finalWideHeight * wideAR; // or finalLandscapeHeight * landscapeAR, should be same
    }
    
    // Center horizontally if width is less than canvas width
    const xOffset = (canvasWidth - finalWidth) / 2;
    
    const positions = [
      {
        x: xOffset,
        y: 0,
        width: finalWidth,
        height: finalWideHeight,
        orientation: 'wide'
      },
      {
        x: xOffset,
        y: finalWideHeight,
        width: finalWidth,
        height: finalLandscapeHeight,
        orientation: 'landscape'
      }
    ];
    
    const videoLayouts = assignVideosToPositions(videos, positions);
    const totalArea = finalWidth * finalLandscapeHeight + finalWidth * finalWideHeight;
    const efficiency = (totalArea / (canvasWidth * canvasHeight)) * 100;
    return { videos: videoLayouts, totalArea, efficiency };
  }
  
  // Special case: WW (2 Wide videos) - stack them vertically
  if (orientationCounts.wide === 2) {
    const wideAR = ASPECT_RATIOS.wide;
    
    // Both videos use 100% width
    const videoWidth = canvasWidth;
    
    // Calculate heights based on 100% width
    const wideHeight = videoWidth / wideAR;
    const totalOptimalHeight = wideHeight * 2;
    
    // If optimal height fits, use it; otherwise scale proportionally
    let finalWideHeight;
    if (totalOptimalHeight <= canvasHeight) {
      finalWideHeight = wideHeight;
    } else {
      // Scale proportionally to fit canvas height
      finalWideHeight = canvasHeight / 2;
    }
    
    const positions = [
      {
        x: 0,
        y: 0,
        width: videoWidth,
        height: finalWideHeight,
        orientation: 'wide'
      },
      {
        x: 0,
        y: finalWideHeight,
        width: videoWidth,
        height: finalWideHeight,
        orientation: 'wide'
      }
    ];
    
    const videoLayouts = assignVideosToPositions(videos, positions);
    const totalArea = videoWidth * finalWideHeight * 2;
    const efficiency = (totalArea / (canvasWidth * canvasHeight)) * 100;
    return { videos: videoLayouts, totalArea, efficiency };
  }
  
  // Try different arrangements and pick the best
  const arrangements = [
    // Side by side
    () => {
      const totalWidth = canvasWidth;
      const width1 = totalWidth / 2;
      const width2 = totalWidth / 2;
      const height1 = width1 / ar1;
      const height2 = width2 / ar2;
      const maxHeight = Math.max(height1, height2);
      
      if (maxHeight <= canvasHeight) {
        return {
          positions: [
            { x: 0, y: (canvasHeight - height1) / 2, width: width1, height: height1, orientation: or1 },
            { x: width1, y: (canvasHeight - height2) / 2, width: width2, height: height2, orientation: or2 }
          ],
          totalArea: width1 * height1 + width2 * height2
        };
      }
      return null;
    },
    // Top and bottom
    () => {
      const totalHeight = canvasHeight;
      const height1 = totalHeight / 2;
      const height2 = totalHeight / 2;
      const width1 = height1 * ar1;
      const width2 = height2 * ar2;
      const maxWidth = Math.max(width1, width2);
      
      if (maxWidth <= canvasWidth) {
        return {
          positions: [
            { x: (canvasWidth - width1) / 2, y: 0, width: width1, height: height1, orientation: or1 },
            { x: (canvasWidth - width2) / 2, y: height1, width: width2, height: height2, orientation: or2 }
          ],
          totalArea: width1 * height1 + width2 * height2
        };
      }
      return null;
    }
  ];

  let bestLayout = null;
  let bestArea = 0;

  for (const arrangement of arrangements) {
    const layout = arrangement();
    if (layout && layout.totalArea > bestArea) {
      bestArea = layout.totalArea;
      bestLayout = layout;
    }
  }

  if (!bestLayout) {
    // Fallback to side by side with scaling
    const width1 = canvasWidth / 2;
    const width2 = canvasWidth / 2;
    const height1 = Math.min(width1 / ar1, canvasHeight);
    const height2 = Math.min(width2 / ar2, canvasHeight);
    
    bestLayout = {
      positions: [
        { x: 0, y: (canvasHeight - height1) / 2, width: width1, height: height1, orientation: or1 },
        { x: width1, y: (canvasHeight - height2) / 2, width: width2, height: height2, orientation: or2 }
      ],
      totalArea: width1 * height1 + width2 * height2
    };
  }

  // Map videos to positions (order independent - match by orientation)
  const videoLayouts = assignVideosToPositions(videos, bestLayout.positions);
  const efficiency = (bestLayout.totalArea / (canvasWidth * canvasHeight)) * 100;
  return { videos: videoLayouts, totalArea: bestLayout.totalArea, efficiency };
}

/**
 * Calculate layout with portrait rules:
 * - Portraits are always in left column (vertically stacked)
 * - If there's another portrait, put it in right column
 * - If there are 1-2 non-portrait videos, put them vertically stacked in right column
 */
function calculatePortraitLayout(orientationCounts, videos, canvasWidth, canvasHeight) {
  const portraitCount = orientationCounts.portrait;
  const nonPortraitCount = videos.length - portraitCount;
  
  // Special case: If we have exactly 3 or 4 portrait videos, put them all in a row
  if ((portraitCount === 3 || portraitCount === 4) && nonPortraitCount === 0) {
    const portraitAR = ASPECT_RATIOS.portrait;
    const width = canvasWidth / portraitCount;
    const height = width / portraitAR;
    
    // Center vertically if height is less than canvas height
    const yOffset = height < canvasHeight ? (canvasHeight - height) / 2 : 0;
    const actualHeight = Math.min(height, canvasHeight);
    
    const positions = [];
    let totalArea = 0;
    
    for (let i = 0; i < portraitCount; i++) {
      const actualWidth = Math.min(width, actualHeight * portraitAR);
      positions.push({
        x: i * width + (width - actualWidth) / 2,
        y: yOffset,
        width: actualWidth,
        height: actualHeight,
        orientation: 'portrait'
      });
      totalArea += actualWidth * actualHeight;
    }
    
    const videoLayouts = assignVideosToPositions(videos, positions);
    const efficiency = (totalArea / (canvasWidth * canvasHeight)) * 100;
    return { videos: videoLayouts, totalArea, efficiency };
  }
  
  // Separate videos by orientation
  const portraitVideos = videos.filter(v => v.orientation === 'portrait');
  const nonPortraitVideos = videos.filter(v => v.orientation !== 'portrait');
  
  // Determine column widths
  // If we have portraits, give them a reasonable width (40% or less)
  const leftColWidth = portraitCount > 0 ? Math.min(canvasWidth * 0.4, canvasWidth * 0.5) : 0;
  const rightColWidth = canvasWidth - leftColWidth;
  
  const positions = [];
  let totalArea = 0;
  
  // Special case: 2 portrait videos - make them the same size, side by side
  if (portraitCount === 2 && nonPortraitCount === 0) {
    const portraitAR = ASPECT_RATIOS.portrait;
    const width = canvasWidth / 2;
    const height = width / portraitAR;
    
    // Ensure both fit within canvas height, and use the same size
    const maxHeight = canvasHeight;
    let finalWidth, finalHeight;
    
    if (height <= maxHeight) {
      finalHeight = height;
      finalWidth = width;
    } else {
      finalHeight = maxHeight;
      finalWidth = maxHeight * portraitAR;
    }
    
    const yOffset = (canvasHeight - finalHeight) / 2;
    
    positions.push({
      x: (width - finalWidth) / 2,
      y: yOffset,
      width: finalWidth,
      height: finalHeight,
      orientation: 'portrait'
    });
    
    positions.push({
      x: width + (width - finalWidth) / 2,
      y: yOffset,
      width: finalWidth,
      height: finalHeight,
      orientation: 'portrait'
    });
    
    totalArea = finalWidth * finalHeight * 2;
  } else if (portraitCount === 1 && nonPortraitCount === 1) {
    // Special case: LP (Landscape + Portrait) - make them same height, use 100% width
    const portraitAR = ASPECT_RATIOS.portrait;
    const nonPortraitVideo = nonPortraitVideos[0];
    const nonPortraitAR = ASPECT_RATIOS[nonPortraitVideo.orientation];
    
    // Calculate optimal height so both videos use 100% of canvas width
    // If portrait width = H * P_AR and non-portrait width = H * N_AR
    // And portrait width + non-portrait width = canvasWidth
    // Then: H * P_AR + H * N_AR = canvasWidth
    // H * (P_AR + N_AR) = canvasWidth
    // H = canvasWidth / (P_AR + N_AR)
    const optimalHeight = canvasWidth / (portraitAR + nonPortraitAR);
    
    // Always use 100% of canvas width
    // Calculate proportional widths that sum to canvasWidth
    const totalAR = portraitAR + nonPortraitAR;
    const leftColWidth = canvasWidth * (portraitAR / totalAR);
    const rightColWidth = canvasWidth * (nonPortraitAR / totalAR);
    
    // Calculate height based on the widths (both will have same height)
    // Use the smaller height to ensure both fit
    const heightFromPortrait = leftColWidth / portraitAR;
    const heightFromNonPortrait = rightColWidth / nonPortraitAR;
    const commonHeight = Math.min(canvasHeight, Math.min(heightFromPortrait, heightFromNonPortrait));
    
    // Center vertically
    const yOffset = (canvasHeight - commonHeight) / 2;
    
    // Portrait in left column (uses 100% of its allocated width)
    positions.push({
      x: 0,
      y: yOffset,
      width: leftColWidth,
      height: commonHeight,
      orientation: 'portrait'
    });
    
    // Non-portrait in right column (uses 100% of its allocated width)
    positions.push({
      x: leftColWidth,
      y: yOffset,
      width: rightColWidth,
      height: commonHeight,
      orientation: nonPortraitVideo.orientation
    });
    
    totalArea = leftColWidth * commonHeight + rightColWidth * commonHeight;
  } else if (portraitCount === 1 && nonPortraitCount === 2 && orientationCounts.landscape === 1 && orientationCounts.wide === 1) {
    // Special case: LPW (1 Portrait + 1 Landscape + 1 Wide)
    // Constraints:
    // 1. Portrait height = canvasHeight (FIXED)
    // 2. Wide height + Landscape height = canvasHeight (MUST BE ENFORCED)
    // 3. Wide width = Landscape width (equal widths)
    // 4. Portrait width + Wide/Landscape width = canvasWidth (100% width)
    const portraitAR = ASPECT_RATIOS.portrait;
    const wideAR = ASPECT_RATIOS.wide;
    const landscapeAR = ASPECT_RATIOS.landscape;
    
    // Solve the system of constraints:
    // 1. Portrait height = canvasHeight (FIXED - MUST BE ENFORCED)
    // 2. Wide height + Landscape height = canvasHeight (MUST BE ENFORCED)
    // 3. Wide width = Landscape width = commonWidth
    // 4. Portrait width + commonWidth = canvasWidth (100% width - try to satisfy)
    
    // Strategy: Enforce both height constraints first, then scale to fit width
    // Portrait height = canvasHeight → Portrait width = canvasHeight * portraitAR
    // LW total height = canvasHeight → commonWidth = canvasHeight / (1/wideAR + 1/landscapeAR)
    
    // Calculate dimensions that satisfy height constraints
    const portraitHeight = canvasHeight; // Fixed
    const portraitWidth = canvasHeight * portraitAR;
    
    const commonWidth = canvasHeight / (1 / wideAR + 1 / landscapeAR);
    const wideHeight = commonWidth / wideAR;
    const landscapeHeight = commonWidth / landscapeAR;
    // Guaranteed: wideHeight + landscapeHeight = canvasHeight
    
    // Check if total width fits canvasWidth
    const totalWidth = portraitWidth + commonWidth;
    
    if (Math.abs(totalWidth - canvasWidth) < 0.1) {
      // Perfect fit - use calculated values
      const xOffset = 0;
      
      positions.push({
        x: xOffset,
        y: 0,
        width: portraitWidth,
        height: portraitHeight,
        orientation: 'portrait'
      });
      totalArea += portraitWidth * portraitHeight;
      
      const wideVideo = nonPortraitVideos.find(v => v.orientation === 'wide');
      if (wideVideo) {
        positions.push({
          x: xOffset + portraitWidth,
          y: 0,
          width: commonWidth,
          height: wideHeight,
          orientation: 'wide'
        });
        totalArea += commonWidth * wideHeight;
      }
      
      const landscapeVideo = nonPortraitVideos.find(v => v.orientation === 'landscape');
      if (landscapeVideo) {
        positions.push({
          x: xOffset + portraitWidth,
          y: wideHeight,
          width: commonWidth,
          height: landscapeHeight,
          orientation: 'landscape'
        });
        totalArea += commonWidth * landscapeHeight;
      }
    } else {
      // Need to scale to fit width while maintaining height constraints as much as possible
      // The challenge: we want Portrait height = canvasHeight AND LW total height = canvasHeight
      // But if total width doesn't fit, we need to scale everything uniformly
      
      // Calculate scale factor to fit width
      const widthScale = canvasWidth / totalWidth;
      
      // Apply uniform scale to maintain proportions
      // This will make both heights scale proportionally
      const scaledPortraitWidth = portraitWidth * widthScale;
      const scaledPortraitHeight = scaledPortraitWidth / portraitAR;
      const scaledCommonWidth = commonWidth * widthScale;
      const scaledWideHeight = scaledCommonWidth / wideAR;
      const scaledLandscapeHeight = scaledCommonWidth / landscapeAR;
      
      // Now scale heights to make Portrait = canvasHeight
      const heightScale = canvasHeight / scaledPortraitHeight;
      let finalPortraitWidth = scaledPortraitWidth * heightScale;
      let finalPortraitHeight = canvasHeight; // Fixed
      
      // Scale LW by the same factor to maintain proportions
      let finalCommonWidth = scaledCommonWidth * heightScale;
      let finalWideHeight = finalCommonWidth / wideAR;
      let finalLandscapeHeight = finalCommonWidth / landscapeAR;
      
      // Check if total width fits
      let finalTotalWidth = finalPortraitWidth + finalCommonWidth;
      
      // If still doesn't fit, scale down to fit width (this will break height constraints slightly)
      if (finalTotalWidth > canvasWidth) {
        const fitScale = canvasWidth / finalTotalWidth;
        finalPortraitWidth = finalPortraitWidth * fitScale;
        finalPortraitHeight = finalPortraitWidth / portraitAR;
        finalCommonWidth = finalCommonWidth * fitScale;
        finalWideHeight = finalCommonWidth / wideAR;
        finalLandscapeHeight = finalCommonWidth / landscapeAR;
        // Ensure widths sum exactly to canvasWidth (handle floating point precision)
        finalTotalWidth = finalPortraitWidth + finalCommonWidth;
        if (finalTotalWidth > canvasWidth) {
          // Adjust commonWidth to ensure exact fit
          finalCommonWidth = canvasWidth - finalPortraitWidth;
          finalWideHeight = finalCommonWidth / wideAR;
          finalLandscapeHeight = finalCommonWidth / landscapeAR;
        }
      }
      
      // Ensure we don't overflow - clamp widths if necessary
      const actualTotalWidth = finalPortraitWidth + finalCommonWidth;
      if (actualTotalWidth > canvasWidth) {
        // Scale down proportionally to fit exactly
        const overflowScale = canvasWidth / actualTotalWidth;
        finalPortraitWidth = finalPortraitWidth * overflowScale;
        finalPortraitHeight = finalPortraitWidth / portraitAR;
        finalCommonWidth = finalCommonWidth * overflowScale;
        finalWideHeight = finalCommonWidth / wideAR;
        finalLandscapeHeight = finalCommonWidth / landscapeAR;
      }
      
      const xOffset = 0; // Left-aligned, no overflow
      
      positions.push({
        x: xOffset,
        y: 0,
        width: finalPortraitWidth,
        height: finalPortraitHeight,
        orientation: 'portrait'
      });
      totalArea += finalPortraitWidth * finalPortraitHeight;
      
      const wideVideo = nonPortraitVideos.find(v => v.orientation === 'wide');
      if (wideVideo) {
        positions.push({
          x: xOffset + finalPortraitWidth,
          y: 0,
          width: finalCommonWidth,
          height: finalWideHeight,
          orientation: 'wide'
        });
        totalArea += finalCommonWidth * finalWideHeight;
      }
      
      const landscapeVideo = nonPortraitVideos.find(v => v.orientation === 'landscape');
      if (landscapeVideo) {
        positions.push({
          x: xOffset + finalPortraitWidth,
          y: finalWideHeight,
          width: finalCommonWidth,
          height: finalLandscapeHeight,
          orientation: 'landscape'
        });
        totalArea += finalCommonWidth * finalLandscapeHeight;
      }
    }
  } else if (portraitCount === 1 && nonPortraitCount === 3) {
    // Special case: LLLP (3 Landscape/Wide + 1 Portrait) - Portrait uses full height
    const portraitAR = ASPECT_RATIOS.portrait;
    
    // Portrait uses full canvas height
    const portraitHeight = canvasHeight;
    const portraitWidth = portraitHeight * portraitAR;
    
    // Left column width should accommodate portrait at full height
    const leftColWidth = portraitWidth;
    const rightColWidth = canvasWidth - leftColWidth;
    
    // Portrait in left column (full height)
    positions.push({
      x: 0,
      y: 0,
      width: portraitWidth,
      height: portraitHeight,
      orientation: 'portrait'
    });
    totalArea += portraitWidth * portraitHeight;
    
    // Right column: 3 non-portrait videos stacked vertically
    const rightColHeight = canvasHeight / 3;
    
    for (let i = 0; i < nonPortraitVideos.length; i++) {
      const video = nonPortraitVideos[i];
      const ar = ASPECT_RATIOS[video.orientation];
      
      // Calculate size to fit in right column
      const maxHeight = rightColHeight;
      const maxWidth = rightColWidth;
      
      let width, height;
      if (maxWidth / ar <= maxHeight) {
        // Fit to width
        width = maxWidth;
        height = width / ar;
      } else {
        // Fit to height
        height = maxHeight;
        width = height * ar;
      }
      
      const y = i * rightColHeight + (rightColHeight - height) / 2;
      
      positions.push({
        x: leftColWidth + (rightColWidth - width) / 2,
        y: y,
        width: width,
        height: height,
        orientation: video.orientation
      });
      totalArea += width * height;
    }
  } else if (portraitCount === 2 && nonPortraitCount === 1) {
    // Special case: LPP (1 Landscape/Wide + 2 Portrait) - Landscape gets maximum space
    const portraitAR = ASPECT_RATIOS.portrait;
    const nonPortraitVideo = nonPortraitVideos[0];
    const nonPortraitAR = ASPECT_RATIOS[nonPortraitVideo.orientation];
    
    // Calculate minimum width needed for portraits (each uses half height)
    const portraitHeight = canvasHeight / 2;
    const portraitWidth = portraitHeight * portraitAR;
    
    // Give all remaining width to landscape (maximize landscape space)
    const landscapeColWidth = canvasWidth - portraitWidth;
    const portraitColWidth = portraitWidth;
    
    // Calculate Landscape size: try to use full height first, then constrain by available width
    const landscapeWidthFromHeight = canvasHeight * nonPortraitAR;
    let finalLandscapeWidth, finalLandscapeHeight;
    
    if (landscapeWidthFromHeight <= landscapeColWidth) {
      // Full height fits in available width, use it
      finalLandscapeHeight = canvasHeight;
      finalLandscapeWidth = finalLandscapeHeight * nonPortraitAR;
    } else {
      // Constrain by available width, calculate height from width
      finalLandscapeWidth = landscapeColWidth;
      finalLandscapeHeight = finalLandscapeWidth / nonPortraitAR;
    }
    
    // Portraits use calculated size (half height each)
    const finalPortraitWidth = portraitWidth;
    const finalPortraitHeight = portraitHeight;
    
    // Center vertically if heights are less than canvas height
    const landscapeYOffset = (canvasHeight - finalLandscapeHeight) / 2;
    const portraitYOffset1 = (canvasHeight / 2 - finalPortraitHeight) / 2;
    const portraitYOffset2 = canvasHeight / 2 + (canvasHeight / 2 - finalPortraitHeight) / 2;
    
    // Landscape in left column (maximum available space)
    positions.push({
      x: 0,
      y: landscapeYOffset,
      width: finalLandscapeWidth,
      height: finalLandscapeHeight,
      orientation: nonPortraitVideo.orientation
    });
    totalArea += finalLandscapeWidth * finalLandscapeHeight;
    
    // Portraits in right column (stacked)
    positions.push({
      x: landscapeColWidth,
      y: portraitYOffset1,
      width: finalPortraitWidth,
      height: finalPortraitHeight,
      orientation: 'portrait'
    });
    totalArea += finalPortraitWidth * finalPortraitHeight;
    
    positions.push({
      x: landscapeColWidth,
      y: portraitYOffset2,
      width: finalPortraitWidth,
      height: finalPortraitHeight,
      orientation: 'portrait'
    });
    totalArea += finalPortraitWidth * finalPortraitHeight;
  } else if (portraitCount === 1 && nonPortraitCount === 2) {
    // Special case: LLP (1 Portrait + 2 Landscape/Wide) - Portrait uses full height
    const portraitAR = ASPECT_RATIOS.portrait;
    
    // Portrait uses full canvas height
    const portraitHeight = canvasHeight;
    const portraitWidth = portraitHeight * portraitAR;
    
    // Left column width should accommodate portrait at full height
    const leftColWidth = portraitWidth;
    const rightColWidth = canvasWidth - leftColWidth;
    
    // Portrait in left column (full height)
    positions.push({
      x: 0,
      y: 0,
      width: portraitWidth,
      height: portraitHeight,
      orientation: 'portrait'
    });
    totalArea += portraitWidth * portraitHeight;
    
    // Right column: 2 non-portrait videos stacked vertically
    const rightColHeight = canvasHeight / 2;
    
    for (let i = 0; i < nonPortraitVideos.length; i++) {
      const video = nonPortraitVideos[i];
      const ar = ASPECT_RATIOS[video.orientation];
      
      // Calculate size to fit in right column
      const maxHeight = rightColHeight;
      const maxWidth = rightColWidth;
      
      let width, height;
      if (maxWidth / ar <= maxHeight) {
        // Fit to width
        width = maxWidth;
        height = width / ar;
      } else {
        // Fit to height
        height = maxHeight;
        width = height * ar;
      }
      
      const y = i * rightColHeight + (rightColHeight - height) / 2;
      
      positions.push({
        x: leftColWidth + (rightColWidth - width) / 2,
        y: y,
        width: width,
        height: height,
        orientation: video.orientation
      });
      totalArea += width * height;
    }
  } else {
    // Determine how many portraits go in left vs right column
    // Rule: All portraits go in left column (unless special cases handled above)
    const portraitsInLeftCol = portraitCount;
    
    // Left column: portrait videos stacked vertically
    if (portraitsInLeftCol > 0) {
      const portraitHeight = canvasHeight / portraitsInLeftCol;
      const portraitAR = ASPECT_RATIOS.portrait;
      
      for (let i = 0; i < portraitsInLeftCol; i++) {
        const height = Math.min(portraitHeight, leftColWidth / portraitAR);
        const width = height * portraitAR;
        const y = i * portraitHeight + (portraitHeight - height) / 2;
        
        positions.push({
          x: (leftColWidth - width) / 2,
          y: y,
          width: width,
          height: height,
          orientation: 'portrait'
        });
        totalArea += width * height;
      }
    }
    
    // Right column: non-portrait videos stacked vertically
    if (nonPortraitVideos.length > 0) {
      const rightColHeight = canvasHeight / nonPortraitVideos.length;
      
      for (let i = 0; i < nonPortraitVideos.length; i++) {
        const video = nonPortraitVideos[i];
        const ar = ASPECT_RATIOS[video.orientation];
        
        // Calculate size to fit in right column
        const maxHeight = rightColHeight;
        const maxWidth = rightColWidth;
        
        let width, height;
        if (maxWidth / ar <= maxHeight) {
          // Fit to width
          width = maxWidth;
          height = width / ar;
        } else {
          // Fit to height
          height = maxHeight;
          width = height * ar;
        }
        
        const y = i * rightColHeight + (rightColHeight - height) / 2;
        
        positions.push({
          x: leftColWidth + (rightColWidth - width) / 2,
          y: y,
          width: width,
          height: height,
          orientation: video.orientation
        });
        totalArea += width * height;
      }
    }
  }
  
  // Assign videos to positions
  const videoLayouts = assignVideosToPositions(videos, positions);
  const efficiency = (totalArea / (canvasWidth * canvasHeight)) * 100;
  return { videos: videoLayouts, totalArea, efficiency };
}

/**
 * Assign videos to positions based on orientation matching (order independent)
 */
function assignVideosToPositions(videos, positions) {
  const result = new Array(positions.length);
  const usedVideoIndices = new Set();
  const usedPositionIndices = new Set();
  
  // First pass: exact orientation matches
  for (let posIdx = 0; posIdx < positions.length; posIdx++) {
    const pos = positions[posIdx];
    
    for (let i = 0; i < videos.length; i++) {
      if (!usedVideoIndices.has(i) && videos[i].orientation === pos.orientation) {
        result[posIdx] = { ...pos, orientation: videos[i].orientation };
        usedVideoIndices.add(i);
        usedPositionIndices.add(posIdx);
        break;
      }
    }
  }
  
  // Second pass: assign remaining videos to remaining positions
  const remainingPositions = [];
  for (let i = 0; i < positions.length; i++) {
    if (!usedPositionIndices.has(i)) {
      remainingPositions.push(i);
    }
  }
  
  let remainingPosIdx = 0;
  for (let i = 0; i < videos.length; i++) {
    if (!usedVideoIndices.has(i) && remainingPosIdx < remainingPositions.length) {
      const posIdx = remainingPositions[remainingPosIdx];
      result[posIdx] = { ...positions[posIdx], orientation: videos[i].orientation };
      remainingPosIdx++;
    }
  }
  
  return result;
}

function calculateThreeVideoLayout(orientationCounts, videos, canvasWidth, canvasHeight) {
  // Portrait rules: portraits in left column, others in right column
  if (orientationCounts.portrait > 0) {
    return calculatePortraitLayout(orientationCounts, videos, canvasWidth, canvasHeight);
  }
  
  // Special case: LLW (2 Landscape + 1 Wide) - Wide on top, both L's below in same row
  if (orientationCounts.landscape === 2 && orientationCounts.wide === 1) {
    const landscapeAR = ASPECT_RATIOS.landscape;
    const wideAR = ASPECT_RATIOS.wide;
    
    // Wide video on top uses 100% width
    const wideWidth = canvasWidth;
    const wideHeight = wideWidth / wideAR;
    
    // Remaining height for the two Landscape videos (they share this height)
    const remainingHeight = canvasHeight - wideHeight;
    const landscapeHeight = remainingHeight; // Both L's use same height
    const landscapeWidth = landscapeHeight * landscapeAR;
    
    // Each Landscape gets half the width
    const landscapeWidthPerVideo = canvasWidth / 2;
    
    // Calculate actual height based on width (maintain aspect ratio)
    const actualLandscapeHeight = landscapeWidthPerVideo / landscapeAR;
    
    // Scale if needed to fit
    let finalWideWidth, finalWideHeight, finalLandscapeWidth, finalLandscapeHeight;
    
    if (wideHeight <= canvasHeight && actualLandscapeHeight <= remainingHeight) {
      // Everything fits
      finalWideWidth = wideWidth;
      finalWideHeight = wideHeight;
      finalLandscapeWidth = landscapeWidthPerVideo;
      finalLandscapeHeight = actualLandscapeHeight;
    } else {
      // Need to scale - calculate scale factor
      const scaleFromWide = canvasHeight / (wideHeight + actualLandscapeHeight);
      const scale = Math.min(1, scaleFromWide);
      
      finalWideHeight = wideHeight * scale;
      finalWideWidth = finalWideHeight * wideAR;
      finalLandscapeHeight = actualLandscapeHeight * scale;
      finalLandscapeWidth = finalLandscapeHeight * landscapeAR;
    }
    
    // Center horizontally if widths are less than canvas width
    const wideXOffset = (canvasWidth - finalWideWidth) / 2;
    const landscapeYOffset = finalWideHeight + (remainingHeight - finalLandscapeHeight) / 2;
    
    const positions = [
      {
        x: wideXOffset,
        y: 0,
        width: finalWideWidth,
        height: finalWideHeight,
        orientation: 'wide'
      },
      {
        x: 0,
        y: landscapeYOffset,
        width: finalLandscapeWidth,
        height: finalLandscapeHeight,
        orientation: 'landscape'
      },
      {
        x: finalLandscapeWidth,
        y: landscapeYOffset,
        width: finalLandscapeWidth,
        height: finalLandscapeHeight,
        orientation: 'landscape'
      }
    ];
    
    const videoLayouts = assignVideosToPositions(videos, positions);
    const totalArea = finalWideWidth * finalWideHeight + finalLandscapeWidth * finalLandscapeHeight * 2;
    const efficiency = (totalArea / (canvasWidth * canvasHeight)) * 100;
    return { videos: videoLayouts, totalArea, efficiency };
  }
  
  // Special case: LWW (1 Landscape + 2 Wide) - WW in same row on top, L below
  if (orientationCounts.landscape === 1 && orientationCounts.wide === 2) {
    const landscapeAR = ASPECT_RATIOS.landscape;
    const wideAR = ASPECT_RATIOS.wide;
    
    // Two Wide videos side by side on top, each gets half width
    const wideWidthPerVideo = canvasWidth / 2;
    const wideHeight = wideWidthPerVideo / wideAR;
    
    // Remaining height for Landscape video
    const remainingHeight = canvasHeight - wideHeight;
    const landscapeHeight = remainingHeight;
    const landscapeWidth = landscapeHeight * landscapeAR;
    
    // Scale if needed to fit (scale heights, keep wide widths at half canvas)
    let finalWideWidth, finalWideHeight, finalLandscapeWidth, finalLandscapeHeight;
    
    if (wideHeight <= canvasHeight && landscapeWidth <= canvasWidth && wideHeight + landscapeHeight <= canvasHeight) {
      // Everything fits
      finalWideWidth = wideWidthPerVideo;
      finalWideHeight = wideHeight;
      finalLandscapeWidth = landscapeWidth;
      finalLandscapeHeight = landscapeHeight;
    } else {
      // Need to scale - scale heights proportionally, keep wide widths at half canvas
      const totalOptimalHeight = wideHeight + landscapeHeight;
      const scale = canvasHeight / totalOptimalHeight;
      
      finalWideWidth = wideWidthPerVideo; // Keep half width
      finalWideHeight = wideHeight * scale;
      finalLandscapeHeight = landscapeHeight * scale;
      finalLandscapeWidth = finalLandscapeHeight * landscapeAR;
    }
    
    // Wide videos side by side, Landscape centered below
    const wideXOffset1 = 0;
    const wideXOffset2 = canvasWidth / 2;
    const landscapeXOffset = (canvasWidth - finalLandscapeWidth) / 2;
    
    const positions = [
      {
        x: wideXOffset1,
        y: 0,
        width: finalWideWidth,
        height: finalWideHeight,
        orientation: 'wide'
      },
      {
        x: wideXOffset2,
        y: 0,
        width: finalWideWidth,
        height: finalWideHeight,
        orientation: 'wide'
      },
      {
        x: landscapeXOffset,
        y: finalWideHeight,
        width: finalLandscapeWidth,
        height: finalLandscapeHeight,
        orientation: 'landscape'
      }
    ];
    
    const videoLayouts = assignVideosToPositions(videos, positions);
    const totalArea = finalWideWidth * finalWideHeight * 2 + finalLandscapeWidth * finalLandscapeHeight;
    const efficiency = (totalArea / (canvasWidth * canvasHeight)) * 100;
    return { videos: videoLayouts, totalArea, efficiency };
  }
  
  // Special case: WWW (3 Wide videos) - two WW on top, one W below
  if (orientationCounts.wide === 3) {
    const wideAR = ASPECT_RATIOS.wide;
    
    // Two Wide videos side by side on top, each gets half width
    const wideWidthPerVideo = canvasWidth / 2;
    const wideHeight = wideWidthPerVideo / wideAR;
    
    // Remaining height for bottom Wide video
    const remainingHeight = canvasHeight - wideHeight;
    const bottomWideHeight = remainingHeight;
    const bottomWideWidth = bottomWideHeight * wideAR;
    
    // Scale if needed to fit (scale heights, keep top wide widths at half canvas)
    let finalTopWideWidth, finalTopWideHeight, finalBottomWideWidth, finalBottomWideHeight;
    
    if (wideHeight <= canvasHeight && bottomWideWidth <= canvasWidth && wideHeight + bottomWideHeight <= canvasHeight) {
      // Everything fits
      finalTopWideWidth = wideWidthPerVideo;
      finalTopWideHeight = wideHeight;
      finalBottomWideWidth = bottomWideWidth;
      finalBottomWideHeight = bottomWideHeight;
    } else {
      // Need to scale - scale heights proportionally, keep top wide widths at half canvas
      const totalOptimalHeight = wideHeight + bottomWideHeight;
      const scale = canvasHeight / totalOptimalHeight;
      
      finalTopWideWidth = wideWidthPerVideo; // Keep half width
      finalTopWideHeight = wideHeight * scale;
      finalBottomWideHeight = bottomWideHeight * scale;
      finalBottomWideWidth = finalBottomWideHeight * wideAR;
      
      // Ensure bottom Wide width doesn't exceed canvas width
      if (finalBottomWideWidth > canvasWidth) {
        finalBottomWideWidth = canvasWidth;
        finalBottomWideHeight = finalBottomWideWidth / wideAR;
      }
    }
    
    // Top Wide videos side by side, bottom Wide centered
    const topWideXOffset1 = 0;
    const topWideXOffset2 = canvasWidth / 2;
    const bottomWideXOffset = (canvasWidth - finalBottomWideWidth) / 2;
    
    const positions = [
      {
        x: topWideXOffset1,
        y: 0,
        width: finalTopWideWidth,
        height: finalTopWideHeight,
        orientation: 'wide'
      },
      {
        x: topWideXOffset2,
        y: 0,
        width: finalTopWideWidth,
        height: finalTopWideHeight,
        orientation: 'wide'
      },
      {
        x: bottomWideXOffset,
        y: finalTopWideHeight,
        width: finalBottomWideWidth,
        height: finalBottomWideHeight,
        orientation: 'wide'
      }
    ];
    
    const videoLayouts = assignVideosToPositions(videos, positions);
    const totalArea = finalTopWideWidth * finalTopWideHeight * 2 + finalBottomWideWidth * finalBottomWideHeight;
    const efficiency = (totalArea / (canvasWidth * canvasHeight)) * 100;
    return { videos: videoLayouts, totalArea, efficiency };
  }
  
  // Special case: LLL (3 Landscape videos) - two stacked L's have same height as single column L
  if (orientationCounts.landscape === 3) {
    const landscapeAR = ASPECT_RATIOS.landscape;
    
    // Layout: two stacked L's in left column, one L in right column
    // Both columns should have the same total height
    // Left column: 2 stacked L's, each with height = H/2, width = (H/2) * AR
    // Right column: 1 L with height = H, width = H * AR
    // Total width = (H/2) * AR + H * AR = H * AR * 1.5
    
    // Calculate optimal height that fits both width and height constraints
    const optimalHeightFromWidth = canvasWidth / (landscapeAR * 1.5);
    const optimalHeight = Math.min(canvasHeight, optimalHeightFromWidth);
    
    // Calculate heights and widths based on optimal height
    const leftColHeight = optimalHeight / 2; // Height for each of the 2 stacked L's
    const rightColHeight = optimalHeight; // Height for the single L
    
    // Calculate widths based on heights (maintains aspect ratio)
    const leftColWidth = leftColHeight * landscapeAR;
    const rightColWidth = rightColHeight * landscapeAR;
    
    // Center vertically if height is less than canvas height
    const yOffset = (canvasHeight - optimalHeight) / 2;
    
    const positions = [
      {
        x: 0,
        y: yOffset,
        width: leftColWidth,
        height: leftColHeight,
        orientation: 'landscape'
      },
      {
        x: 0,
        y: yOffset + leftColHeight,
        width: leftColWidth,
        height: leftColHeight,
        orientation: 'landscape'
      },
      {
        x: leftColWidth,
        y: yOffset,
        width: rightColWidth,
        height: rightColHeight,
        orientation: 'landscape'
      }
    ];
    
    const videoLayouts = assignVideosToPositions(videos, positions);
    const totalArea = leftColWidth * optimalHeight + rightColWidth * optimalHeight;
    const efficiency = (totalArea / (canvasWidth * canvasHeight)) * 100;
    return { videos: videoLayouts, totalArea, efficiency };
  }
  
  // Get unique orientations and their counts
  const orientations = [];
  if (orientationCounts.landscape > 0) {
    for (let i = 0; i < orientationCounts.landscape; i++) orientations.push('landscape');
  }
  if (orientationCounts.wide > 0) {
    for (let i = 0; i < orientationCounts.wide; i++) orientations.push('wide');
  }
  
  const or1 = orientations[0] || videos[0].orientation;
  const or2 = orientations[1] || videos[1].orientation;
  const or3 = orientations[2] || videos[2].orientation;
  const ar1 = ASPECT_RATIOS[or1];
  const ar2 = ASPECT_RATIOS[or2];
  const ar3 = ASPECT_RATIOS[or3];

  const arrangements = [
    // 1+2 arrangement: one large, two small
    () => {
      const largeWidth = canvasWidth * 0.6;
      const smallWidth = canvasWidth * 0.4;
      const largeHeight = largeWidth / ar1;
      const smallHeight1 = smallWidth / ar2;
      const smallHeight2 = smallWidth / ar3;
      const totalSmallHeight = smallHeight1 + smallHeight2;
      
      if (largeHeight <= canvasHeight && totalSmallHeight <= canvasHeight) {
        return {
          positions: [
            { x: 0, y: (canvasHeight - largeHeight) / 2, width: largeWidth, height: largeHeight, orientation: or1 },
            { x: largeWidth, y: 0, width: smallWidth, height: smallHeight1, orientation: or2 },
            { x: largeWidth, y: smallHeight1, width: smallWidth, height: smallHeight2, orientation: or3 }
          ],
          totalArea: largeWidth * largeHeight + smallWidth * smallHeight1 + smallWidth * smallHeight2
        };
      }
      return null;
    },
    // 2+1 arrangement: two on top, one on bottom
    () => {
      const topHeight = canvasHeight * 0.5;
      const bottomHeight = canvasHeight * 0.5;
      const topWidth1 = topHeight * ar1;
      const topWidth2 = topHeight * ar2;
      const bottomWidth = bottomHeight * ar3;
      const totalTopWidth = topWidth1 + topWidth2;
      
      if (totalTopWidth <= canvasWidth && bottomWidth <= canvasWidth) {
        return {
          positions: [
            { x: 0, y: 0, width: topWidth1, height: topHeight, orientation: or1 },
            { x: topWidth1, y: 0, width: topWidth2, height: topHeight, orientation: or2 },
            { x: (canvasWidth - bottomWidth) / 2, y: topHeight, width: bottomWidth, height: bottomHeight, orientation: or3 }
          ],
          totalArea: topWidth1 * topHeight + topWidth2 * topHeight + bottomWidth * bottomHeight
        };
      }
      return null;
    },
    // Three in a row
    () => {
      const width = canvasWidth / 3;
      const height1 = width / ar1;
      const height2 = width / ar2;
      const height3 = width / ar3;
      const maxHeight = Math.max(height1, height2, height3);
      
      if (maxHeight <= canvasHeight) {
        return {
          positions: [
            { x: 0, y: (canvasHeight - height1) / 2, width, height: height1, orientation: or1 },
            { x: width, y: (canvasHeight - height2) / 2, width, height: height2, orientation: or2 },
            { x: width * 2, y: (canvasHeight - height3) / 2, width, height: height3, orientation: or3 }
          ],
          totalArea: width * height1 + width * height2 + width * height3
        };
      }
      return null;
    }
  ];

  let bestLayout = null;
  let bestArea = 0;

  for (const arrangement of arrangements) {
    const layout = arrangement();
    if (layout && layout.totalArea > bestArea) {
      bestArea = layout.totalArea;
      bestLayout = layout;
    }
  }

  if (!bestLayout) {
    // Fallback: equal width columns
    const width = canvasWidth / 3;
    const height1 = Math.min(width / ar1, canvasHeight);
    const height2 = Math.min(width / ar2, canvasHeight);
    const height3 = Math.min(width / ar3, canvasHeight);
    
    bestLayout = {
      positions: [
        { x: 0, y: (canvasHeight - height1) / 2, width, height: height1, orientation: or1 },
        { x: width, y: (canvasHeight - height2) / 2, width, height: height2, orientation: or2 },
        { x: width * 2, y: (canvasHeight - height3) / 2, width, height: height3, orientation: or3 }
      ],
      totalArea: width * height1 + width * height2 + width * height3
    };
  }

  // Map videos to positions (order independent)
  const videoLayouts = assignVideosToPositions(videos, bestLayout.positions);
  const efficiency = (bestLayout.totalArea / (canvasWidth * canvasHeight)) * 100;
  return { videos: videoLayouts, totalArea: bestLayout.totalArea, efficiency };
}

function calculateFourVideoLayout(orientationCounts, videos, canvasWidth, canvasHeight) {
  // Portrait rules: portraits in left column, others in right column
  if (orientationCounts.portrait > 0) {
    return calculatePortraitLayout(orientationCounts, videos, canvasWidth, canvasHeight);
  }
  
  // Get unique orientations and their counts
  const orientations = [];
  if (orientationCounts.landscape > 0) {
    for (let i = 0; i < orientationCounts.landscape; i++) orientations.push('landscape');
  }
  if (orientationCounts.wide > 0) {
    for (let i = 0; i < orientationCounts.wide; i++) orientations.push('wide');
  }
  
  const or1 = orientations[0] || videos[0].orientation;
  const or2 = orientations[1] || videos[1].orientation;
  const or3 = orientations[2] || videos[2].orientation;
  const or4 = orientations[3] || videos[3].orientation;
  const ar1 = ASPECT_RATIOS[or1];
  const ar2 = ASPECT_RATIOS[or2];
  const ar3 = ASPECT_RATIOS[or3];
  const ar4 = ASPECT_RATIOS[or4];

  const arrangements = [
    // 2x2 grid
    () => {
      const width = canvasWidth / 2;
      const height = canvasHeight / 2;
      const width1 = Math.min(width, height * ar1);
      const height1 = width1 / ar1;
      const width2 = Math.min(width, height * ar2);
      const height2 = width2 / ar2;
      const width3 = Math.min(width, height * ar3);
      const height3 = width3 / ar3;
      const width4 = Math.min(width, height * ar4);
      const height4 = width4 / ar4;
      
      return {
        positions: [
          { x: (width - width1) / 2, y: (height - height1) / 2, width: width1, height: height1, orientation: or1 },
          { x: width + (width - width2) / 2, y: (height - height2) / 2, width: width2, height: height2, orientation: or2 },
          { x: (width - width3) / 2, y: height + (height - height3) / 2, width: width3, height: height3, orientation: or3 },
          { x: width + (width - width4) / 2, y: height + (height - height4) / 2, width: width4, height: height4, orientation: or4 }
        ],
        totalArea: width1 * height1 + width2 * height2 + width3 * height3 + width4 * height4
      };
    },
    // 1+3 arrangement: one large, three small
    () => {
      const largeWidth = canvasWidth * 0.6;
      const smallWidth = canvasWidth * 0.4;
      const largeHeight = largeWidth / ar1;
      const smallHeight = canvasHeight / 3;
      const smallWidth2 = Math.min(smallWidth, smallHeight * ar2);
      const smallHeight2 = smallWidth2 / ar2;
      const smallWidth3 = Math.min(smallWidth, smallHeight * ar3);
      const smallHeight3 = smallWidth3 / ar3;
      const smallWidth4 = Math.min(smallWidth, smallHeight * ar4);
      const smallHeight4 = smallWidth4 / ar4;
      
      if (largeHeight <= canvasHeight) {
        return {
          positions: [
            { x: 0, y: (canvasHeight - largeHeight) / 2, width: largeWidth, height: largeHeight, orientation: or1 },
            { x: largeWidth, y: 0, width: smallWidth2, height: smallHeight2, orientation: or2 },
            { x: largeWidth, y: smallHeight, width: smallWidth3, height: smallHeight3, orientation: or3 },
            { x: largeWidth, y: smallHeight * 2, width: smallWidth4, height: smallHeight4, orientation: or4 }
          ],
          totalArea: largeWidth * largeHeight + smallWidth2 * smallHeight2 + smallWidth3 * smallHeight3 + smallWidth4 * smallHeight4
        };
      }
      return null;
    },
    // Four in a row
    () => {
      const width = canvasWidth / 4;
      const height1 = width / ar1;
      const height2 = width / ar2;
      const height3 = width / ar3;
      const height4 = width / ar4;
      const maxHeight = Math.max(height1, height2, height3, height4);
      
      if (maxHeight <= canvasHeight) {
        return {
          positions: [
            { x: 0, y: (canvasHeight - height1) / 2, width, height: height1, orientation: or1 },
            { x: width, y: (canvasHeight - height2) / 2, width, height: height2, orientation: or2 },
            { x: width * 2, y: (canvasHeight - height3) / 2, width, height: height3, orientation: or3 },
            { x: width * 3, y: (canvasHeight - height4) / 2, width, height: height4, orientation: or4 }
          ],
          totalArea: width * height1 + width * height2 + width * height3 + width * height4
        };
      }
      return null;
    }
  ];

  let bestLayout = null;
  let bestArea = 0;

  for (const arrangement of arrangements) {
    const layout = arrangement();
    if (layout && layout.totalArea > bestArea) {
      bestArea = layout.totalArea;
      bestLayout = layout;
    }
  }

  if (!bestLayout) {
    // Fallback: 2x2 grid with scaling
    const width = canvasWidth / 2;
    const height = canvasHeight / 2;
    const height1 = Math.min(height, width / ar1);
    const height2 = Math.min(height, width / ar2);
    const height3 = Math.min(height, width / ar3);
    const height4 = Math.min(height, width / ar4);
    
    bestLayout = {
      positions: [
        { x: (width - width) / 2, y: (height - height1) / 2, width, height: height1, orientation: or1 },
        { x: width + (width - width) / 2, y: (height - height2) / 2, width, height: height2, orientation: or2 },
        { x: (width - width) / 2, y: height + (height - height3) / 2, width, height: height3, orientation: or3 },
        { x: width + (width - width) / 2, y: height + (height - height4) / 2, width, height: height4, orientation: or4 }
      ],
      totalArea: width * height1 + width * height2 + width * height3 + width * height4
    };
  }

  // Map videos to positions (order independent)
  const videoLayouts = assignVideosToPositions(videos, bestLayout.positions);
  const efficiency = (bestLayout.totalArea / (canvasWidth * canvasHeight)) * 100;
  return { videos: videoLayouts, totalArea: bestLayout.totalArea, efficiency };
}

