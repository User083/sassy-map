import { expect, afterEach, describe, it } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';


expect.extend(matchers);

describe('Cleanup', () => {
    it('cleans up', () => {
        afterEach(() => {
            cleanup();
          });
    });
  });
  

