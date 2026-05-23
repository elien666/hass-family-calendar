// Several dependencies ship legacy CJS bundles (e.g. @mdi/react, @ramonak/
// react-progress-bar). Depending on how the bundler's CJS→ESM interop wraps such
// a module — which varies with build target and chunk layout — a `default` import
// can land as the component itself, OR as a wrapper/namespace object such as
// { default: Component } or { Icon, default }. Rendering that wrapper object as a
// JSX element throws "React error #130" (element type is invalid, got: object).
//
// resolveComponent walks a set of candidate values and returns the first one that
// is actually a renderable React type — a function, or a forwardRef/memo object
// carrying $$typeof. It never hands a bare wrapper object back to React.

export const isRenderableComponent = (value) =>
  typeof value === 'function' ||
  typeof value === 'string' ||
  (value != null && typeof value === 'object' && value.$$typeof != null)

// Given a default import (and optionally a named export), try the known interop
// shapes in order and return the first renderable component, or undefined.
export const resolveComponent = (defaultImport, namedImport) => {
  const candidates = [
    defaultImport,
    defaultImport?.default,
    defaultImport?.default?.default,
    namedImport,
    namedImport?.default,
  ]
  return candidates.find(isRenderableComponent)
}

export default resolveComponent
