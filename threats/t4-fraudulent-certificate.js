(function () {
  var threat = {
    "id": "T4",
    "name": "Fraudulent Certificate",
    "desc": "The TLS certificate provided by a website could be faked.",
    "response": [
        {
            "id": "R4",
            "name": "Signed Certificates",
            "type": "Reduce",
            "desc": "TLS system relies on cryptographic signatures to ensure that the TLS certificate is not manipulated in transit from the website to the web browser.\n\nIt is important to note that while the signature ensures the certificate has not been manipulated, the signature says nothing about the truthfulness of the contents of that certificate, which must be addressed at a different layer, e.g., with a hierarchy of certificate authorities with explicit trust relationships."
        }
    ],
    "elements": [
        "O1"
    ],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Spoofing"
};

  window.ThreatModel.register(threat);
})();
