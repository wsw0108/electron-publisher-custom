import { PublishContext, UploadTask, Publisher } from 'electron-publish';
import { PublishConfiguration } from 'builder-util-runtime';
import { OSSPublisher, OSSOptions } from './oss';

export interface CustomOptions extends PublishConfiguration {
  readonly provider: 'custom';
  readonly backend: string;
  [index: string]: any;
}

export default class CustomPublisher extends Publisher {
  readonly providerName = 'Custom';

  backend: Publisher;

  protected constructor(
    context: PublishContext,
    private options: CustomOptions,
  ) {
    super(context);
    switch (this.options.backend) {
      case 'oss':
        this.backend = new OSSPublisher(
          context,
          options as unknown as OSSOptions,
        );
        break;
      default:
        throw new Error(`unsupported backend: ${this.options.backend}`);
    }
  }

  async upload(task: UploadTask): Promise<any> {
    return this.backend.upload(task);
  }

  toString() {
    return `${this.providerName} (backend: ${this.backend.toString()})`;
  }
}
