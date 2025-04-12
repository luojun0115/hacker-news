import worker from '../worker'

export * from './'

export class DOQueueHandler {}
export class DOShardedTagCache {}

export default {
  fetch: worker.scheduled,
}
