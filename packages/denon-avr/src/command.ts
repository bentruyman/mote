import {
  MultipleGettersError,
  UnknownGetterError,
  UnknownParameterError,
  UnknownRangeError,
  UnknownSetterError
} from './errors';

export interface IParameter {
  description?: string;
}

export interface IGetterParameter extends IParameter {
  type: 'getter';
}

export interface ISetterParameter extends IParameter {
  type: 'setter';
  label: string;
  value: string;
}

export interface IRangeParameter extends IParameter {
  type: 'range';
  min: number;
  max: number;
}

export type Parameter = IGetterParameter | ISetterParameter | IRangeParameter;

export type InputParameter = number | string;

export class Command {
  parameters: Parameter[];
  prefix: string;

  constructor (prefix: string, parameters: Parameter[]) {
    this.prefix = prefix;
    this.parameters = parameters;
  }

  invoke (param?: InputParameter): string {
    if (param === undefined) {
      // getter
      const getter = this._findGetter();

      if (getter !== undefined) {
        return `${this.prefix}?`;
      }

      throw new UnknownGetterError();
    } else if (typeof param === 'string') {
      // setter
      const setter = this._findSetter(param);

      if (setter !== undefined) {
        return `${this.prefix}${setter.value}`;
      }

      throw new UnknownSetterError(param);
    } else if (typeof param === 'number') {
      // range
      const range = this._findRange();

      if (range !== undefined) {
        return `${this.prefix}${padForMax(param, range.max)}`;
      }

      throw new UnknownRangeError();
    }

    throw new UnknownParameterError(param);
  }

  private _findRange (): IRangeParameter | undefined {
    return this.parameters.find((p): p is IRangeParameter => p.type === 'range');
  }

  private _findGetter (): IGetterParameter | undefined {
    const getters: IGetterParameter[] = this.parameters.filter((p): p is IGetterParameter => p.type === 'getter');

    if (getters.length > 1) {
      throw new MultipleGettersError();
    }

    return getters[0];
  }

  private _findSetter (label: string): ISetterParameter | undefined {
    return this.parameters
      .filter((p): p is ISetterParameter => p.type === 'setter')
      .find(p => p.label === label);
  }
}

function padForMax (n: number, max: number): string {
  const numLength = numberLength(n);
  const maxLength = numberLength(max);
  const padding = (new Array(maxLength - numLength + 1)).join('0');

  return `${padding}${n}`;
}

function numberLength (n: number): number {
  return ('' + n).length;
}
