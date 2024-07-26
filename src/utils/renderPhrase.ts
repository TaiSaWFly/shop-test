export type RenderPhraseCasesType = {
    nominativeCase: string;
    genitiveCase: string;
    instrumentalCase: string;
};

type RenderPhraseType = (
    number: number,
    { nominativeCase, genitiveCase, instrumentalCase }: RenderPhraseCasesType
) => string;

const renderPhrase: RenderPhraseType = (
    number: number,
    { nominativeCase, genitiveCase, instrumentalCase }
) => {
    let lastOne = number;

    if (number >= 1000) {
        lastOne = Number(String(number).slice(2, 4));
    } else if (number >= 100) {
        lastOne = Number(String(number).slice(1, 3));
    }

    lastOne = Number(String(number).slice(-1));

    if (number > 4 && number < 15) {
        return instrumentalCase;
    }
    if (lastOne === 1) return nominativeCase;
    if ([2, 3, 4].indexOf(lastOne) >= 0) return genitiveCase;
    return instrumentalCase;
};

export default renderPhrase;
