export function calculateLevenshteinDistance(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

export function findSimilarAnswer(
  newAnswer: string,
  consensusGroups: Record<string, any>
): string | null {
  const similarityThreshold = 0.7;
  let bestMatch: string | null = null;
  let bestSimilarity = 0;

  Object.keys(consensusGroups).forEach((existingAnswer) => {
    const maxLength = Math.max(newAnswer.length, existingAnswer.length);
    const distance = calculateLevenshteinDistance(newAnswer, existingAnswer);
    const similarity = (maxLength - distance) / maxLength;

    if (similarity > similarityThreshold && similarity > bestSimilarity) {
      bestMatch = existingAnswer;
      bestSimilarity = similarity;
    }
  });

  return bestMatch;
}
