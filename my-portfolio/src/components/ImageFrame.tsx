import type { ReactNode } from "react";

interface Props {

children: ReactNode;

}

function ImageFrame({ children }: Props) {

return (

<div className="image-frame">

{children}

</div>

);

}

export default ImageFrame;