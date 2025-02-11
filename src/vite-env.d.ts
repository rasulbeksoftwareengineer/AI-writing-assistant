/// <reference types="vite/client" />
interface IpmortMetaEnv {
    readonly VITE_OPEN_AI_KEY: string
    readonly VITE_SENTRY_DSN: string
}

interface IpmortMeta{
    readonly env: IpmortMetaEnv
}