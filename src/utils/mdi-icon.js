// @mdi/react@1.6.1 ships a legacy CJS bundle whose `module.exports` is the object
// { Icon, Stack, default: Icon }, where Icon is a React.forwardRef component
// ($$typeof: Symbol(react.forward_ref)) — NOT a plain function. Depending on the
// bundler's CJS→ESM interop, the default import can land as the component, the CJS
// wrapper object, or a doubly-wrapped namespace. resolveComponent picks the first
// renderable candidate so we never hand a wrapper object to React (would throw
// React #130). See utils/resolve-component.js for the full rationale.
import MdiReactDefault, { Icon as NamedIcon } from '@mdi/react'
import { resolveComponent } from './resolve-component'

const Icon = resolveComponent(MdiReactDefault, NamedIcon)

if (!Icon && typeof console !== 'undefined') {
  console.error('mdi-icon: could not resolve a renderable Icon component from @mdi/react')
}

export default Icon
