(function () {
  var threat = {
    "id": "T2",
    "name": "Network Surveillance",
    "desc": "With traditional HTTP interactions, it is possible for network observers to read the content of the request and any responses. Data sent in either direction, e.g., bank details shown to the user AND user input provided in web forms, can easily be captured and used by an attacker anywhere along the path through the network.",
    "response": [
        {
            "id": "R2",
            "name": "TLS Handshake",
            "type": "Transfer",
            "desc": "Before any data is exchanged, the client and server perform a Diffie-Hellman key exchange to establish session keys that cannot be seen by network observers. These keys are used to encrypt the balance of HTTPS exchanges so that the actual data shared (in both directions) is secured from outside observers."
        }
    ],
    "elements": [
        "F4"
    ],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Information Disclosure"
};

  window.ThreatModel.register(threat);
})();
