import { TESTS } from './src/data/tests.js';

TESTS.forEach(test => {
  const ids = test.questions.map(q => q.id);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    console.log(`Test ${test.id} has duplicate IDs!`);
    const counts = {};
    ids.forEach(id => {
      counts[id] = (counts[id] || 0) + 1;
    });
    Object.entries(counts).forEach(([id, count]) => {
      if (count > 1) console.log(`  ID ${id} appears ${count} times`);
    });
  }
});
