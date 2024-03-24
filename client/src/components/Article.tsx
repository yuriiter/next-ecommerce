import React from "react";
import { RichText } from "./RichText";
import { Typography } from "./Typography/Typography";

type ArticleProps = {
  title: string;
  children: string;
};

export const Article = ({ title, children }: ArticleProps) => {
  return (
    <div className="article">
      <Typography className="article__title">{title}</Typography>
      <div className="divider-x"></div>
      <RichText>{children}</RichText>
    </div>
  );
};
