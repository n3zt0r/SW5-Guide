import { cleanText } from "helpers/cleanText";

export const menuDataCreater = (data) =>
    data.flatMap((path) => [
        {
            id: path.id,
            name: path.name,
        },
        ...path.chapters.flatMap((chapter) => [
            {
                id: `${path.id}_${chapter.id}`,
                name: chapter.name,
            },
            ...chapter.stages.flatMap((stage) => [
                {
                    id: `${path.id}_${chapter.id}_${cleanText(stage.id)}`,
                    name: stage.id,
                },
            ]),
        ]),
    ]);
