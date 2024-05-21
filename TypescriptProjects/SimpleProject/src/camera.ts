interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

// this will give error, we have to implement every attribute defined in TakePhoto
class Instagram implements TakePhoto {
  constructor(public cameraMode: string) {}
}

// like this
class Youtube implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}
