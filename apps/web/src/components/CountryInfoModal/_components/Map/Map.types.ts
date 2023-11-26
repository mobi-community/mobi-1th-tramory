export interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  children?: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: google.maps.MapMouseEvent) => void;
}
