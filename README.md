# electron-publisher-custom

Backends supported currently: `oss`.

## Backend OSS

```
export interface OSSOptions {
  readonly provider: 'oss';
  readonly credentials?: string;
  readonly bucket: string;
  readonly region?: string;
  readonly endpoint?: string;
  readonly secure: boolean;
  readonly timeout?: number | string | undefined;
  readonly base: string;
}
```

Default credentials file location: `~/.config/electron-publisher-custom/oss.yaml`.

Format of credentials file:
```yaml
access_key_id: "key id"
access_key_secret: "key secret"
endpoint: ""
region: ""
```

`endpoint` and `region` will be overrided by options of `OSSPublisher`.
