document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Clock Update
    const clockEl = document.getElementById('live-clock');
    
    if (clockEl) {
        function updateClock() {
            const now = new Date();
            // Use user's local time formatting
            const timeString = now.toLocaleTimeString('en-US', { hour12: false });
            clockEl.textContent = timeString;
        }
        
        setInterval(updateClock, 1000);
        updateClock();
    }

    // 2. Smooth Scroll to Simulator
    // Not needed since Launch Dashboard now links to dashboard.html, but keeping logic just in case
    const btnSimulator = document.getElementById('btn-simulator');
    if (btnSimulator) {
        btnSimulator.addEventListener('click', (e) => {
            const section = document.getElementById('simulator-section');
            if (section) {
                e.preventDefault();
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 3. Copy to Clipboard
    const btnInstall = document.getElementById('btn-install');
    if (btnInstall) {
        btnInstall.addEventListener('click', () => {
            navigator.clipboard.writeText('npm install -g ecodefer').then(() => {
                const originalHTML = btnInstall.innerHTML;
                btnInstall.innerHTML = '<span style="color:var(--accent)">Copied to clipboard!</span>';
                btnInstall.style.borderColor = 'var(--accent)';
                setTimeout(() => {
                    btnInstall.innerHTML = originalHTML;
                    btnInstall.style.borderColor = '';
                }, 2000);
            });
        });
    }

    // 4. Simulator Logic
    const btnCalculate = document.getElementById('btn-calculate');
    const outputBox = document.getElementById('output-box');
    const taskSelect = document.getElementById('task-select');
    const regionSelect = document.getElementById('region-select');
    const immExecEl = document.getElementById('imm-exec');
    const defExecEl = document.getElementById('def-exec');

    if (btnCalculate && outputBox && taskSelect && immExecEl && defExecEl) {
        btnCalculate.addEventListener('click', () => {
            // Simple logic to randomize or calculate based on dropdowns
            const kwh = parseFloat(taskSelect.value);
            
            // Let's create realistic-looking calculations
            // Immediate: ~0.8 kg CO2 per kWh
            const immediateCO2 = (kwh * 0.81).toFixed(2);
            
            // Deferred: ~0.15 kg CO2 per kWh
            const deferredCO2 = (kwh * 0.14).toFixed(2);

            // Update UI
            immExecEl.textContent = `${immediateCO2} kg CO2 generated.`;
            defExecEl.textContent = `${deferredCO2} kg CO2 generated.`;

            // Animate button and show result
            const originalText = btnCalculate.textContent;
            btnCalculate.textContent = 'ANALYZING GRID...';
            btnCalculate.style.pointerEvents = 'none';
            btnCalculate.style.opacity = '0.7';

            // Hide output box if it was visible
            outputBox.classList.add('hidden');
            outputBox.style.position = 'absolute';
            outputBox.style.visibility = 'hidden';

            setTimeout(() => {
                btnCalculate.textContent = originalText;
                btnCalculate.style.pointerEvents = 'all';
                btnCalculate.style.opacity = '1';
                
                outputBox.classList.remove('hidden');
                outputBox.style.position = 'relative';
                outputBox.style.visibility = 'visible';
                
                // Add a small pop animation
                outputBox.animate([
                    { transform: 'translateY(10px)', opacity: 0 },
                    { transform: 'translateY(0)', opacity: 1 }
                ], { duration: 400, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
            }, 800);
        });
    }
});
