if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", function (giroscopio) {
    let grados = giroscopio.alpha;

    if (grados !== null) {
      let imprimirGrados = Math.round(grados);

      document.getElementById("grados").textContent = imprimirGrados;
      document.getElementById("flecha").style.transform = "rotate(" + imprimirGrados + "deg)";
    }
  });
} else {
  alert("Dispositivo NO compatible");
}

  

