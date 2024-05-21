abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  // we can declare and define functions inside abstract class which makes it different from interface
  getReelTime(): number {
    return 8;
  }
}

const tp = new TakePhoto("test", "test"); // cannot create an instance of abstract classes

// BUT

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const insta = new Instagram("test", "test", 1); // this works perfectly fine
insta.getReelTime();
