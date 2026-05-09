// @mdi/react@1.6.1 ships a legacy CJS bundle whose default export is the Icon
// component. Vite v8 / Rolldown's CJS-interop wraps it once more: the module's
// `default` is the CJS module.exports object ({ Icon, Stack, default: Icon }),
// not the Icon component itself. Unwrap the right field for all callers.
import MdiReactDefault, { Icon as NamedIcon } from '@mdi/react'

const Icon =
  (typeof MdiReactDefault === 'function' && MdiReactDefault) ||
  MdiReactDefault?.default ||
  MdiReactDefault?.Icon ||
  NamedIcon

export default Icon
