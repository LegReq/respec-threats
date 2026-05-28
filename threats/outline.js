(
  function () {
    var threatCategories = [{
      name: "Target Threats",
      id: "threat-model-target-threats",
      threats: ["T1", "T2", "T3", "T4"]
    },
    {
      name: "Implementation Threats",
      id: "threat-model-implementation-threats",
      threats: ["T5", "T6"]
    },
      {
        name: "External Threats",
        id: "threat-model-externnal-threats",
        threats: ["T7", "T8", "T9"]
      },
      {
        name: "Dependency Threats",
        id: "threat-model-dependency-threats",
        threats: ["T10"]
      },

    ];

    window.ThreatModel.registerCategories(threatCategories);

  })();
