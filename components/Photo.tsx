import Image, { type ImageProps } from "next/image";

/** next/image wrapper: local photos are optimized; stock (remote) photos load directly in the browser */
export default function Photo(props: ImageProps) {
  const remote = typeof props.src === "string" && props.src.startsWith("http");
  return <Image {...props} unoptimized={remote || props.unoptimized} alt={props.alt} />;
}
