export default interface loggerInterface {
  log: (message: string, status?: string) => void
  error: (message: string, status?: string) => void
}
