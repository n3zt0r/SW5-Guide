import { cleanText } from "helpers/cleanText";

export const menuDataCreater = (data) =>
    data.flatMap((path) => [
        { id: cleanText(path.id), name: path.id },
        ...path.chapters.flatMap((chapter) => [
            {
                id: `${cleanText(chapter.id)}_${cleanText(path.id)}`,
                name: chapter.id,
            },
            ...chapter.stages.flatMap((stage) => [
                {
                    id: `${cleanText(stage.id)}_${cleanText(path.id)}`,
                    name: stage.id,
                },
            ]),
        ]),
    ]);
