/// <reference types="vite/client" />
interface IpmortMetaEnv {
    readonly VITE_OPEN_AI_KEY: string
}

interface IpmortMeta{
    readonly env: IpmortMetaEnv
}