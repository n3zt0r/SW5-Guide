import { cleanText } from "helpers/cleanText";

export const menuDataCreater = (data) =>
    data.flatMap((stage) => [
        { id: cleanText(stage.id), name: stage.id },
        ...stage.chapters.flatMap((chapter) => [
            {
                id: `${cleanText(chapter.id)}_${cleanText(stage.id)}`,
                name: chapter.id,
            },
            ...chapter.stages.flatMap((stage) => [
                { id: cleanText(stage.id), name: stage.id },
            ]),
        ]),
    ]);
