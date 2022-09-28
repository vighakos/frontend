let fut_input = document.querySelector('#fut'),
    foci_input = document.querySelector('#foci'),
    bringa_input = document.querySelector('#bringa'),
    hegy_input = document.querySelector('#hegy'),
    lovag_input = document.querySelector('#lovag'),
    tura_input = document.querySelector('#tura'),
    kajak_input = document.querySelector('#kajak'),
    suly_input = document.querySelector('#suly'),
    ping_input = document.querySelector('#ping'),
    kutya_input = document.querySelector('#kutya'),
    fut_input_kal = document.querySelector('#fut_kal'),
    foci_input_kal = document.querySelector('#foci_kal'),
    bringa_input_kal = document.querySelector('#bringa_kal'),
    hegy_input_kal = document.querySelector('#hegy_kal'),
    lovag_input_kal = document.querySelector('#lovag_kal'),
    tura_input_kal = document.querySelector('#tura_kal'),
    kajak_input_kal = document.querySelector('#kajak_kal'),
    suly_input_kal = document.querySelector('#suly_kal'),
    ping_input_kal = document.querySelector('#ping_kal'),
    kutya_input_kal = document.querySelector('#kutya_kal'),
    osszperc_input = document.querySelector('#osszperc'),
    osszkcal_input = document.querySelector('#osszkcal'),
    napikcal_input = document.querySelector('#napikcal'),
    deleteBtn = document.querySelector('#delete')


let kaloriak = [680, 550, 480, 420, 370, 360, 340, 320, 270, 200]

document.addEventListener('change', () => {
    let osszperc = 0, osszkcal = 0

    let fut = Math.round((kaloriak[0] * parseFloat(fut_input.value) / 60))
    fut_input_kal.value = fut
    osszperc += fut_input.value != "" ? parseFloat(fut_input.value) : 0
    osszkcal += fut > 0 ? fut : 0
    
    let foci = Math.round((kaloriak[1] * parseFloat(foci_input.value) / 60))
    foci_input_kal.value = foci
    osszperc += foci_input.value != "" ? parseFloat(foci_input.value) : 0
    osszkcal += foci > 0 ? foci : 0
    
    let bringa = Math.round((kaloriak[2] * parseFloat(bringa_input.value) / 60))
    bringa_input_kal.value = bringa
    osszperc += bringa_input.value != "" ? parseFloat(bringa_input.value) : 0
    osszkcal += bringa > 0 ? bringa : 0
    
    let hegy = Math.round((kaloriak[3] * parseFloat(hegy_input.value) / 60))
    hegy_input_kal.value = hegy
    osszperc += hegy_input.value != "" ? parseFloat(hegy_input.value) : 0
    osszkcal += hegy > 0 ? hegy : 0
    
    let lovag = Math.round((kaloriak[4] * parseFloat(lovag_input.value) / 60))
    lovag_input_kal.value = lovag
    osszperc += lovag_input.value != "" ? parseFloat(lovag_input.value) : 0
    osszkcal += lovag > 0 ? lovag : 0
    
    let tura = Math.round((kaloriak[5] * parseFloat(tura_input.value) / 60))
    tura_input_kal.value = tura
    osszperc += tura_input.value != "" ? parseFloat(tura_input.value) : 0
    osszkcal += tura > 0 ? tura : 0
    
    let kajak = Math.round((kaloriak[6] * parseFloat(kajak_input.value) / 60))
    kajak_input_kal.value = kajak
    osszperc += kajak_input.value != "" ? parseFloat(kajak_input.value) : 0
    osszkcal += kajak > 0 ? kajak : 0
    
    let suly = Math.round((kaloriak[7] * parseFloat(suly_input.value) / 60))
    suly_input_kal.value = suly
    osszperc += suly_input.value != "" ? parseFloat(suly_input.value) : 0
    osszkcal += suly > 0 ? suly : 0
    
    let ping = Math.round((kaloriak[8] * parseFloat(ping_input.value) / 60))
    ping_input_kal.value = ping
    osszperc += ping_input.value != "" ? parseFloat(ping_input.value) : 0
    osszkcal += ping > 0 ? ping : 0
    
    let kutya = Math.round((kaloriak[9] * parseFloat(kutya_input.value) / 60))
    kutya_input_kal.value = kutya
    osszperc += kutya_input.value != "" ? parseFloat(kutya_input.value) : 0
    osszkcal += kutya > 0 ? kutya : 0

    osszperc_input.value = osszperc
    osszkcal_input.value = osszkcal
    napikcal_input.value = (osszkcal / 2000 * 100).toFixed(2) + '%'
})

deleteBtn.addEventListener('click', () => {
    fut_input.value = ""
    foci_input.value = ""
    bringa_input.value = ""
    hegy_input.value = ""
    lovag_input.value = ""
    tura_input.value = ""
    kajak_input.value = ""
    suly_input.value = ""
    ping_input.value = ""
    kutya_input.value = ""
    fut_input_kal.value = ""
    foci_input_kal.value = ""
    bringa_input_kal.value = ""
    hegy_input_kal.value = ""
    lovag_input_kal.value = ""
    tura_input_kal.value = ""
    kajak_input_kal.value = ""
    suly_input_kal.value = ""
    ping_input_kal.value = ""
    kutya_input_kal.value = ""
    osszperc_input.value = ""
    osszkcal_input.value = ""
    napikcal_input.value = ""
})