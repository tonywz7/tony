import React from "react";

type PhoneFrameProps = {
  children?: React.ReactNode;
  width?: number;
};

export const PhoneFrame = ({ children, width = 320 }: PhoneFrameProps) => {
  const height = Math.round((width * 800) / 380);

  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: "44px",
        border: "1px solid var(--neutral-alpha-medium)",
        background: "var(--page-background)",
        overflow: "hidden",
        boxShadow: "0 30px 80px -30px rgba(0,0,0,0.18), 0 8px 24px -10px rgba(0,0,0,0.06)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "96px",
          height: "26px",
          borderRadius: "16px",
          background: "var(--neutral-on-background-strong)",
          opacity: 0.85,
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "8px",
          borderRadius: "44px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "36px",
            overflow: "hidden",
            background: "var(--neutral-background-weak)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
