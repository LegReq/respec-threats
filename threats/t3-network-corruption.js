(function () {
  var threat = {
    "id": "T3",
    "name": "Network Corruption",
    "desc": "It is possible for data to be corrupted in transit, either intentionally or accidentally.",
    "response": [
        {
            "id": "R3",
            "name": "Integrity Check",
            "type": "Reduce",
            "desc": "All payload messages sent via TLS are signed with a message authentication code (MAC), ensuring the recipient can verify the MAC to ensure the integrity of the data."
        }
    ],
    "elements": [
        "F4"
    ],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Tampering"
};

  window.ThreatModel.register(threat);
})();
