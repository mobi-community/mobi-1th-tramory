export interface MapProps extends google.maps.MapOptions {
  children?: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: google.maps.MapMouseEvent) => void;
}
