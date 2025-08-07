const changeResolvedWorkItemColors = () => {
    const workItemStateCells = document.querySelectorAll('.workitem-state-color-cell');
    
    workItemStateCells.forEach(cell => {
        const stateValueElement = cell.querySelector('.workitem-state-value');
        
        if (stateValueElement && stateValueElement.textContent.trim() === 'Resolved') {
            const stateCircle = cell.querySelector('.workitem-state-circle');
            
            if (stateCircle) {
                stateCircle.style.backgroundColor = 'rgb(255, 157, 0)';
                stateCircle.style.borderColor = 'rgb(255, 157, 0)';
            }
        }
    });
};

const observeDOMChanges = () => {
    const observer = new MutationObserver((mutations) => {
        let shouldUpdate = false;
        
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                shouldUpdate = true;
            }
        });
        
        if (shouldUpdate) {
            changeResolvedWorkItemColors();
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
};

const initializeColorifier = () => {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            changeResolvedWorkItemColors();
            observeDOMChanges();
        });
    } else {
        changeResolvedWorkItemColors();
        observeDOMChanges();
    }
};

initializeColorifier();