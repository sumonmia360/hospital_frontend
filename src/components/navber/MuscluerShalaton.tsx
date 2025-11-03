
import Body from "@mjcdev/react-body-highlighter";
export default function MuscluerShalaton() {
  return (
    <div><Body
			data={[
				{ slug: "chest", intensity: 1, side: "left" },
				{ slug: "biceps", intensity: 2 },
			]}
			gender="female"
			side="front"
			scale={1.7}
			border="#dfdfdf"
		/></div>
  )
}
