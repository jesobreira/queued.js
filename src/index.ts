import stacked = require('stacked.js')


class stackedQueue extends stacked {
  constructor(limit : number = Infinity, persistence : any = undefined) {
    super(limit, persistence)
  }

  first() : any {
    let ret : any = super.get().shift()
    super.normalize()
    return ret
  }

  push(val : any) : void {
    super.push(val)
  }

  size() : number {
    return super.size()
  }

  empty() : boolean {
    return super.empty()
  }

  setlimit(limit : number) : void {
    super.setlimit(limit)
  }

  getlimit() : number {
    return super.getlimit()
  }

  swap(instance: any) : void {
    super.swap(instance)
  }

  get() : Array<any> {
    return super.get()
  }

  set(arr : Array<any>) : void {
    super.set(arr)
  }
}

declare var module: any;

if (typeof window === 'undefined')
  module.exports = stackedQueue
