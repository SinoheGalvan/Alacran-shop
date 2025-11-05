import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

interface FrameProps {
  onLogin?: () => void;
}

export const Frame = ({ onLogin }: FrameProps): JSX.Element => {
  const socialLogins = [
    {
      src: "/instagram-logo-1.png",
      alt: "Instagram logo",
    },
    {
      src: "/google-logo-1.png",
      alt: "Google logo",
    },
    {
      src: "/github-logo-1.png",
      alt: "Github logo",
    },
  ];

  return (
    <div className="border border-solid border-black bg-[linear-gradient(0deg,rgba(56,122,158,1)_0%,rgba(56,122,158,1)_100%)] w-full min-w-[338px] min-h-[653px] flex flex-col items-center px-4 py-6">
      <img
        className="w-[153px] h-[153px] object-cover mt-1.5"
        alt="Gemini generated"
        src="/gemini-generated-image-dacxt2dacxt2dacx-1.png"
      />

      <p className="mt-4 [font-family:'Inria_Serif',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-[normal]">
        Welcome to Alacran shop, your best <br />
        v-bucks &amp; skins provider
      </p>

      <h1 className="mt-12 [font-family:'Inria_Serif',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-[normal]">
        Log in
      </h1>

      <div className="w-full max-w-[305px] mt-9">
        <Input
          type="email"
          placeholder="E-mail"
          className="h-11 px-5 rounded-xl shadow-[inset_1px_1.5px_4px_#0000001a,inset_1px_1.5px_4px_#00000014,inset_0px_-0.5px_1px_#ffffff40,inset_0px_-0.5px_1px_#ffffff4c] bg-blend-color-burn bg-[linear-gradient(0deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.1)_100%),linear-gradient(0deg,rgba(208,208,208,0.5)_0%,rgba(208,208,208,0.5)_100%)] border-0 text-labelssecondary placeholder:text-labelssecondary font-body font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)]"
        />
      </div>

      <div className="w-full max-w-[305px] mt-7">
        <Input
          type="password"
          placeholder="Password"
          className="h-11 px-5 rounded-xl shadow-[inset_1px_1.5px_4px_#0000001a,inset_1px_1.5px_4px_#00000014,inset_0px_-0.5px_1px_#ffffff40,inset_0px_-0.5px_1px_#ffffff4c] bg-blend-color-burn bg-[linear-gradient(0deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.1)_100%),linear-gradient(0deg,rgba(208,208,208,0.5)_0%,rgba(208,208,208,0.5)_100%)] border-0 text-labelssecondary placeholder:text-labelssecondary font-body font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)]"
        />
      </div>

      <div className="w-full max-w-[305px] flex justify-end mt-4">
        <button className="[font-family:'Inria_Serif',Helvetica] font-bold text-[10px] tracking-[0] leading-[normal]">
          <span className="text-white">Forget </span>
          <span className="text-[#2007ffa3]">password?</span>
        </button>
      </div>

      <Button
        onClick={onLogin}
        className="w-[186px] h-[30px] mt-4 rounded-full bg-[#00d9ff] hover:bg-[#00c4e6] text-white [font-family:'Inter',Helvetica] font-bold text-xs tracking-[0] leading-[normal]"
      >
        Log in
      </Button>

      <p className="mt-5 [font-family:'Inria_Serif',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal]">
        or log in with:
      </p>

      <div className="flex gap-4 mt-3">
        {socialLogins.map((social, index) => (
          <button
            key={index}
            className="w-[39px] h-[39px] flex items-center justify-center"
          >
            <img
              className="w-full h-full object-cover"
              alt={social.alt}
              src={social.src}
            />
          </button>
        ))}
      </div>

      <p className="mt-auto mb-6 [font-family:'Inria_Serif',Helvetica] font-normal text-[10px] text-center tracking-[0] leading-[normal]">
        <span className="text-white">
          Don&apos;t you have an account yet, register{" "}
        </span>
        <button className="text-[#1f1ec7]">here?</button>
      </p>
    </div>
  );
};
