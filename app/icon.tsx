import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const fontData = await readFile(
    path.join(process.cwd(), "app/fonts/CormorantGaramond-MediumItalic.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#00356B",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 52,
            color: "#fbf8f1",
            fontFamily: "Cormorant",
            fontStyle: "italic",
            lineHeight: 1,
            paddingBottom: 4,
          }}
        >
          M
        </span>
        <div
          style={{
            position: "absolute",
            bottom: 8,
            width: 18,
            height: 1,
            background: "#B89B5E",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cormorant",
          data: fontData,
          style: "italic",
          weight: 500,
        },
      ],
    }
  );
}
