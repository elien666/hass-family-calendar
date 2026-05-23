// @mdi/react@1.6.1 ships a legacy CJS bundle whose `module.exports` is the object
// { Icon, Stack, default: Icon }, where Icon is a React.forwardRef component
// ($$typeof: Symbol(react.forward_ref)) — NOT a plain function.
//
// Depending on how the bundler's CJS→ESM interop wraps that module (Vite/Rolldown
// varies the wrapping by build target and chunk layout), the default import lands as
// any of: the forwardRef component itself, the CJS wrapper object, or a doubly-wrapped
// namespace. A naive `default || default.Icon` chain can therefore resolve to the
// *wrapper object* instead of the component. Rendering that object as a JSX element
// throws "React error #130" (element type is invalid, got: object), which on the wall
// display surfaced as the "Header: Bereich konnte nicht geladen werden" toast.
//
// To be robust against every interop shape, walk the candidate values and pick the
// first one that is actually a renderable React type (a function, or a forwardRef/memo
// object carrying $$typeof). Never hand a bare wrapper object back to React.
import MdiReactDefault, { Icon as NamedIcon } from '@mdi/react'

const isRenderableComponent = (value) =>
  typeof value === 'function' ||
  (value != null && typeof value === 'object' && value.$$typeof != null)

// Candidate values, in order of preference, covering the known interop shapes:
// - the default import as-is (ESM-style: already the component)
// - default.default / default.Icon (CJS wrapper exposed under .default)
// - the named export (some interop paths only populate named exports)
const candidates = [
  MdiReactDefault,
  MdiReactDefault?.default,
  MdiReactDefault?.Icon,
  NamedIcon,
  NamedIcon?.default,
]

const Icon = candidates.find(isRenderableComponent)

if (!Icon && typeof console !== 'undefined') {
  // Surfaces in the backend log via the global error handler if it ever happens again,
  // turning a cryptic React #130 into an actionable message.
  console.error('mdi-icon: could not resolve a renderable Icon component from @mdi/react')
}

export default Icon
