(function () {
  var threat = {
    "id": "T1",
    "name": "Imposter Websites",
    "desc": "It\u2019s possible for a compromised network to return content that does not come from the owner of the domain. The user requests a given URL, but what is returned comes from an attacker on the network pretending to be that website.",
    "response": [
        {
            "id": "R1",
            "name": "Third Party Identifying Certificates",
            "type": "Reduce",
            "desc": "TLS certificates inform users of the public key associated with a given domain, as cryptographically attested by a signing authority, called a Certificate Authority (CA). By comparing the domain in the certificate with the domain in the URL and verifying the network session is established using the public key in the certificate, verifying parties gain confidence that the TLS communications are with the intended party.\n\nSome CAs provide further assurances regarding the entity identified in the certificate such as a legal name. However, not all CAs perform the same validation processes, making the certificates primarily an attestation of URL validation (that the cert holder has proven legitimate control over the domain) and not much more.\n\nFinally, individual websites can self-attest with a self-signed TLS certificate. Distinguishing between self-signed and those signed in accordance with the CA hierarchy rooted in web browsers is easy. We consider self-signed TLS certificates only \"identifying\" in terms of the current session, as the website could change the certificate as frequently as desired. In contrast, third party certificates give at least one other party who attests to the legitimacy of a particular certificate for a particular domain."
        }
    ],
    "elements": [
        "F4",
        "O1"
    ],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Spoofing"
};

  window.ThreatModel.register(threat);
})();
