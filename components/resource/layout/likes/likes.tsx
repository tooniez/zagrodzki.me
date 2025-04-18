import { random } from "lodash";
import { memo } from "react";

import { getResourceLikesBySlug } from "@/lib/kv/likes";

import { LikesCounter } from "./counter/likes-counter";

import type { RESOURCE_TYPE } from "@/types";

interface LikesProps {
  readonly type: RESOURCE_TYPE;
  readonly slug: string;
}

export const Likes = memo<LikesProps>(async ({ type, slug }) => {
  const likes = await getResourceLikesBySlug(type, slug);

  return <LikesCounter type={type} slug={slug} likes={likes || random(500, 2000)} />;
});

Likes.displayName = "Likes";
