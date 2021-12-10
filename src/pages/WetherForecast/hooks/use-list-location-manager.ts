import { useCallback } from 'react';
import { PopoverManager } from '@taibn.dev.vn/h-popover';
import { LIST_LOCATION_POP_IDENTITY } from 'srcRoot/utils/constants';

const useListlocationManager = () => {
  const openListPop = useCallback((e) => {
    const isOpened = PopoverManager.isVisible(LIST_LOCATION_POP_IDENTITY);

    if (!isOpened) {
      PopoverManager.openPopover({
        ...LIST_LOCATION_POP_IDENTITY,
        anchorEvent: e,
      });
    }
  }, []);
  const closeListPop = useCallback(() => {
    const isOpened = PopoverManager.isVisible(LIST_LOCATION_POP_IDENTITY);
    
    if (isOpened) PopoverManager.closePopover(LIST_LOCATION_POP_IDENTITY);
  }, []);

  return { openListPop, closeListPop };
};

export default useListlocationManager;
