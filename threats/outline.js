/*
 *  Copyright 2026 Legendary Requirements
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function () {
    var threatCategories = [
        {
            name: "Target Threats",
            id: "threat-model-target-threats",
            threats: ["T1", "T2", "T3", "T4"],
        },
        {
            name: "Implementation Threats",
            id: "threat-model-implementation-threats",
            threats: ["T5", "T6"],
        },
        {
            name: "External Threats",
            id: "threat-model-externnal-threats",
            threats: ["T7", "T8", "T9"],
        },
        {
            name: "Dependency Threats",
            id: "threat-model-dependency-threats",
            threats: ["T10"],
        },
    ];

    window.ThreatModel.registerCategories(threatCategories);
})();
