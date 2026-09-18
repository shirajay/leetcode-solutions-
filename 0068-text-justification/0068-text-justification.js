var fullJustify = function(words, maxWidth) {
    const result = [];
    let i = 0;

    while (i < words.length) {
        let j = i;
        let lineLength = 0;

        // Step 1: Find how many words fit in this line
        while (
            j < words.length &&
            lineLength + words[j].length + (j - i) <= maxWidth
        ) {
            lineLength += words[j].length;
            j++;
        }

        const wordCount = j - i;
        const isLastLine = j === words.length;

        // Step 2: Last line OR single word
        if (isLastLine || wordCount === 1) {
            let line = "";

            for (let k = i; k < j; k++) {
                line += words[k];

                if (k < j - 1) {
                    line += " ";
                }
            }

            // Add remaining spaces at the end
            line += " ".repeat(maxWidth - line.length);

            result.push(line);
        }

        // Step 3: Fully justify normal lines
        else {
            const totalSpaces = maxWidth - lineLength;
            const gaps = wordCount - 1;

            const spacesPerGap = Math.floor(totalSpaces / gaps);
            const extraSpaces = totalSpaces % gaps;

            let line = "";

            for (let k = i; k < j; k++) {
                line += words[k];

                if (k < j - 1) {
                    // Left gaps get one extra space
                    const spaces =
                        spacesPerGap + (k - i < extraSpaces ? 1 : 0);

                    line += " ".repeat(spaces);
                }
            }

            result.push(line);
        }

        i = j;
    }

    return result;
};