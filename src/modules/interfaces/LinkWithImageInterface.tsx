import LinkInterface from "./LinkInterface"
interface LinkWithImageInterface extends LinkInterface {
  images: {
    mobile: string;
    tablet: string;
    desktop: {
      small: string,
      large?: string
    };
  };
}

export default LinkWithImageInterface;
