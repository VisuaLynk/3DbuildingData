    // BURADAKI DEGISKENLER, VERI TABANINDAN BILGI ALIP VERMEK ICIN TANIMLANMISTIR.
var aa, bb, cc, dd, ee;
var EmailData, FloorData, SpaceData, ZoneData, SystemData, AssetData, ComponentData, SpareData, ResourceData,
    JobData, DocumentData, AttributeData, GuidData;
var inputValueEmail, inputValueFloor, inputValueSpace, inputValueSystem, inputValueZone, inputValueAsset,
    inputValueComponent, inputValueSpare, inputValueResource, inputValueJob, inputValueDocument,
    inputValueAttribute, inputValueGuid;
var valueEmail, valueFloor, valueSpace, valueSystem, valueZone, valueAsset, valueComponent, valueSpare,
    valueResource, valueJob, valueDocument, valueAttribute, valueGuid;
    
    // VERI TABANINDAN TUM BILGILER AJAX CAGRILARI ILE ELDE EDILMEKTEDIR.

    // GLOBAL TANIMLAMA NUMARALARI YBM MODELINDEN ELDE EDILMEKTE. MODELE TIKLANDIGINDA BILGILER BU NUMARA ILE GELECEK
document.getElementById('filter-button').onclick = function searchBox() {
    $(function getGuidData() {
        var sonuc=localStorage.getItem("MyValue");
        inputValueGuid = sonuc;
        d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
        visualynk.taxonomy.createTaxonomyPanel();
        visualynk.tools.reset();
    });

    // EMAIL VERILERININ ELDE EDILMESI
    $(function getEmailData() {
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/db/data/transaction/commit",
            accepts: {json: "application/json"},
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"statements": [{"statement": "MATCH (n:EMAIL) RETURN n"}]}),
            success: function (Emails) {
                aa = Emails.results[0].data;
                aa.forEach(function (EmailDatum) {
                    passVarEmail(EmailDatum.row[0].name)
                });
            }
        });
        function passVarEmail(smthEmail) {
            EmailData = [smthEmail];
            valueEmail = d3.select("#constraint")[0][0].value;
            for (i = 0; i < EmailData.length; i++) {
                if (EmailData[i] == valueEmail) {
                    inputValueEmail = valueEmail;
                    d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
                    visualynk.taxonomy.createTaxonomyPanel();
                    visualynk.tools.reset();
                }
                break;
            }
        }

    });

    // KAT BILGILERININ ELDE EDILMESI
    $(function getFloorData() {
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/db/data/transaction/commit",
            accepts: {json: "application/json"},
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"statements": [{"statement": "MATCH (n:FLOOR) RETURN n"}]}),
            success: function (Floors) {
                bb = Floors.results[0].data;
                bb.forEach(function (FloorDatum) {
                    passVarFloor(FloorDatum.row[0].name)
                });
            }
        });
        function passVarFloor(smthFloor) {
            FloorData = [smthFloor];
            valueFloor = d3.select("#constraint")[0][0].value;
            for (i = 0; i < FloorData.length; i++) {
                if (FloorData[i] == valueFloor) {
                    inputValueFloor = valueFloor;
                    d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
                    visualynk.taxonomy.createTaxonomyPanel();
                    visualynk.tools.reset();
                }
                break;
            }
        }
    });
    
    // MAHAL BILGILERININ ELDE EDILMESI
    $(function getSpaceData() {
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/db/data/transaction/commit",
            accepts: {json: "application/json"},
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"statements": [{"statement": "MATCH (n:SPACE) RETURN n"}]}),
            success: function (Spaces) {
                cc = Spaces.results[0].data;
                cc.forEach(function (SpaceDatum) {
                    passVarSpace(SpaceDatum.row[0].name)
                });
            }
        });
        function passVarSpace(smthSpace) {
            SpaceData = [smthSpace];
            valueSpace = d3.select("#constraint")[0][0].value;
            for (i = 0; i < SpaceData.length; i++) {
                if (SpaceData[i] == valueSpace) {
                    inputValueSpace = valueSpace;
                    d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
                    visualynk.taxonomy.createTaxonomyPanel();
                    visualynk.tools.reset();
                }
                   break;
            }
        }
    });
    
    // ZONLARA AIT BILGILERIN ELDE EDILMESI
    $(function getZoneData() {
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/db/data/transaction/commit",
            accepts: {json: "application/json"},
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"statements": [{"statement": "MATCH (n:ZONE) RETURN n"}]}),
            success: function (Zones) {
                ee = Zones.results[0].data;
                ee.forEach(function (ZoneDatum) {
                    passVarZone(ZoneDatum.row[0].name)
                });
            }
        });
        function passVarZone(smthZone) {
            ZoneData = [smthZone];
            valueZone = d3.select("#constraint")[0][0].value;
            for (i = 0; i < ZoneData.length; i++) {
                if (ZoneData[i] == valueZone) {
                    inputValueZone = valueZone;
                    d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
                    visualynk.taxonomy.createTaxonomyPanel();
                    visualynk.tools.reset();
                }
                break;
            }
        }
    });
    
    // VARLIKLARIN (ASSET) ELDE EDILMESI
    $(function getAssetData() {
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/db/data/transaction/commit",
            accepts: {json: "application/json"},
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"statements": [{"statement": "MATCH (n:ASSET) RETURN n"}]}),
            success: function (Assets) {
                ee = Assets.results[0].data;
                ee.forEach(function (AssetDatum) {
                    passVarAsset(AssetDatum.row[0].name)
                });
            }
        });
        function passVarAsset(smthAsset) {
            AssetData = [smthAsset];
            valueAsset = d3.select("#constraint")[0][0].value;
            for (i = 0; i < AssetData.length; i++) {
                if (AssetData[i] == valueAsset) {
                    inputValueAsset = valueAsset;
                    d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
                    visualynk.taxonomy.createTaxonomyPanel();
                    visualynk.tools.reset();
                }
                break;
            }
        }
    });
    
    // KOMPONENTLERIN ELDE EDILMESI
    $(function getComponentData() {
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/db/data/transaction/commit",
            accepts: {json: "application/json"},
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"statements": [{"statement": "MATCH (n:COMPONENT) RETURN n"}]}),
            success: function (Components) {
                ee = Components.results[0].data;
                ee.forEach(function (ComponentDatum) {
                    passVarComponent(ComponentDatum.row[0].name)
                });
            }
        });
        function passVarComponent(smthComponent) {
            ComponentData = [smthComponent];
            valueComponent = d3.select("#constraint")[0][0].value;
            for (i = 0; i < AssetData.length; i++) {
                if (ComponentData[i] == valueComponent) {
                    inputValueComponent = valueComponent;
                    d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
                    visualynk.taxonomy.createTaxonomyPanel();
                    visualynk.tools.reset();
                }
                break;
            }
        }
    });
    
    // SISTEM VERILERININ ELDE EDILMESI
    $(function getSystemData() {
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/db/data/transaction/commit",
            accepts: {json: "application/json"},
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"statements": [{"statement": "MATCH (n:SYSTEM) RETURN n"}]}),
            success: function (Systems) {
                dd = Systems.results[0].data;
                dd.forEach(function (SystemDatum) {
                    passVarSystem(SystemDatum.row[0].name)
                });
            }
        });
        function passVarSystem(smthSystem) {
            SystemData = [smthSystem];
            valueSystem = d3.select("#constraint")[0][0].value;
            for (i = 0; i < SystemData.length; i++) {
                if (SystemData[i] == valueSystem) {
                    inputValueSystem = valueSystem;
                    d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
                    visualynk.taxonomy.createTaxonomyPanel();
                    visualynk.tools.reset();
                }
                break;
            }
        }
    });
    
    // EK PARCALARIN ELDE EDILMESI
    $(function getSpareData() {
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/db/data/transaction/commit",
            accepts: {json: "application/json"},
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"statements": [{"statement": "MATCH (n:SPARE) RETURN n"}]}),
            success: function (Spares) {
                dd = Spares.results[0].data;
                dd.forEach(function (SpareDatum) {
                    passVarSystem(SpareDatum.row[0].name)
                });
            }
        });
        function passVarSystem(smthSpare) {
            SpareData = [smthSpare];
            valueSpare = d3.select("#constraint")[0][0].value;
            for (i = 0; i < SpareData.length; i++) {
                if (SpareData[i] == valueSpare) {
                    inputValueSpare = valueSpare;
                    d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
                    visualynk.taxonomy.createTaxonomyPanel();
                    visualynk.tools.reset();
                }
                break;
            }
        }

    });
    
    // KAYNAK VERILERININ ELDE EDILMESI
    $(function getResourceData() {
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/db/data/transaction/commit",
            accepts: {json: "application/json"},
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"statements": [{"statement": "MATCH (n:RESOURCE) RETURN n"}]}),
            success: function (Resources) {
                dd = Resources.results[0].data;
                dd.forEach(function (ResourceDatum) {
                    passVarSystem(ResourceDatum.row[0].name)
                });
            }
        });
        function passVarSystem(smthResource) {
            ResourceData = [smthResource];
            valueResource = d3.select("#constraint")[0][0].value;
            for (i = 0; i < ResourceData.length; i++) {
                if (ResourceData[i] == valueResource) {
                    inputValueResource = valueResource;
                    d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
                    visualynk.taxonomy.createTaxonomyPanel();
                    visualynk.tools.reset();
                }
                break;
            }
        }
    });
    
    // IS GOREVLERININ ELDE EDILMESI
    $(function getJobData() {
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/db/data/transaction/commit",
            accepts: {json: "application/json"},
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"statements": [{"statement": "MATCH (n:JOB) RETURN n"}]}),
            success: function (Jobs) {
                dd = Jobs.results[0].data;
                dd.forEach(function (JobDatum) {
                    passVarJob(JobDatum.row[0].name)
                });
            }
        });
        function passVarJob(smthJob) {
            JobData = [smthJob];
            valueJob = d3.select("#constraint")[0][0].value;
            for (i = 0; i < JobData.length; i++) {
                if (JobData[i] == valueJob) {
                    inputValueJob = valueJob;
                    d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
                    visualynk.taxonomy.createTaxonomyPanel();
                    visualynk.tools.reset();
                }
                break;
            }
        }
    });
    
    // BELGELERE AIT BILGILERIN ELDE EDILMESI ELDE EDILMESI
    $(function getDocumentData() {
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/db/data/transaction/commit",
            accepts: {json: "application/json"},
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"statements": [{"statement": "MATCH (n:DOCUMENT) RETURN n"}]}),
            success: function (Documents) {
                dd = Documents.results[0].data;
                dd.forEach(function (DocumentDatum) {
                    passVarDocument(DocumentDatum.row[0].name)
                });
            }
        });
        function passVarDocument(smthDocument) {
            DocumentData = [smthDocument];
            valueDocument = d3.select("#constraint")[0][0].value;
            for (i = 0; i < DocumentData.length; i++) {
                if (DocumentData[i] == valueJob) {
                    inputValueDocument = valueDocument;
                    d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
                    visualynk.taxonomy.createTaxonomyPanel();
                    visualynk.tools.reset();
                }
                break;
            }
        }
    });
    
    // BILGILERE AIT EK OZELLIKLERIN VEYA DETAYLI BILGILERIN ELDE EDILMESI
    $(function getAttributeData() {
        $.ajax({
            type: "POST",
            url: "http://localhost:7474/db/data/transaction/commit",
            accepts: {json: "application/json"},
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({"statements": [{"statement": "MATCH (n:ATTRIBUTE) RETURN n"}]}),
            success: function (Attributes) {
                dd = Attributes.results[0].data;
                dd.forEach(function (AttributeDatum) {
                    passVarAttribute(AttributeDatum.row[0].name)
                });
            }
        });
        function passVarAttribute(smthAttribute) {
            AttributeData = [smthAttribute];
            valueAttribute = d3.select("#constraint")[0][0].value;
            for (i = 0; i < AttributeData.length; i++) {
                if (AttributeData[i] == valueAttribute) {
                    inputValueAttribute = valueAttribute;
                    d3.select("#" + visualynk.taxonomy.containerId).selectAll("ul").data([]).exit().remove();
                    visualynk.taxonomy.createTaxonomyPanel();
                    visualynk.tools.reset();
                }
                break;
            }
        }
    });
};

    // VERI TABANINA BURDAN BAGLANIYORUZ.
visualynk.rest.CYPHER_URL = "http://localhost:7474/db/data/transaction/commit";
visualynk.logger.LEVEL = visualynk.logger.LogLevels.INFO;
visualynk.provider.nodeProviders = {

    "COBie2Graph":{
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/3DtoGraph.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueGuid) {
                    return ["$identifier.name =~ '(?i).*" + inputValueGuid + ".*'"];
                } else {
                    return [];
                }
        }
     },

    "EMAIL": {
        "returnAttributes": ["email1"],
        "constraintAttribute": "email1",
        "URLlinkAttribute": "email1",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/email.png"
        },
        "displayResults": displayResults_email,
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueEmail) {
                    return ["$identifier.name =~ '(?i).*" + inputValueEmail + ".*'"];
                } else {
                    return [];
                }
        }
     },
    "FACILITY": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/facility.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
    },
    "FLOOR": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/floor.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueFloor) {
                    return ["$identifier.name =~ '(?i).*" + inputValueFloor + ".*'"];
                } else {
                    return [];
                }
            }
    },

    "SPACE": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/space.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueSpace) {
                    return ["$identifier.name =~ '(?i).*" + inputValueSpace + ".*'"];
                } else {
                    return [];
                }
            }
    },
    "ZONE": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/zone.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueZone) {
                    return ["$identifier.name =~ '(?i).*" + inputValueZone + ".*'"];
                } else {
                    return [];
                }
            }
    },
    "ASSET": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/asset.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },

        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueAsset) {
                    return ["$identifier.name =~ '(?i).*" + inputValueAsset + ".*'"];
                } else {
                    return [];
                }
            }
    },
    "COMPONENT": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/component.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueComponent) {
                    return ["$identifier.name =~ '(?i).*" + inputValueComponent + ".*'"];
                } else {
                    return [];
                }
            }
    },
    "SYSTEM": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/system.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueSystem) {
                    return ["$identifier.name =~ '(?i).*" + inputValueSystem + ".*'"];
                } else {
                    return [];
                }
            }
    },
    "ASSEMBLY": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/assembly.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "CONNECTION": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/connection.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "SPARE": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/spare.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueSpare) {
                    return ["$identifier.name =~ '(?i).*" + inputValueSpare + ".*'"];
                } else {
                    return [];
                }
            }
    },
    "RESOURCE": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/resource.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueResource) {
                    return ["$identifier.name =~ '(?i).*" + inputValueResource + ".*'"];
                } else {
                    return [];
                }
            }
    },
    "JOB": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/job.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueJob) {
                    return ["$identifier.name =~ '(?i).*" + inputValueJob + ".*'"];
                } else {
                    return [];
                }
            }
    },
    "DOCUMENT": {
        "returnAttributes": ["name", "link"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "link",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/document.png"
        },
        "displayResults": displayResults_document,
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueDocument) {
                    return ["$identifier.name =~ '(?i).*" + inputValueDocument + ".*'"];
                } else {
                    return [];
                }
            }
    },
    "ATTRIBUTE": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/attribute.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        },
        "getPredefinedConstraints": function (node) {
                if (inputValueAttribute) {
                    return ["$identifier.name =~ '(?i).*" + inputValueAttribute + ".*'"];
                } else {
                    return [];
                }
            }
    },
    "COORDINATE_NAME": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name",
        "URLlinkAttribute": "name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/coordinate.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
        "Coordinate_Value": {
        "returnAttributes": ["x_axis", "y_axis", "z_axis"],
        "constraintAttribute": "x_axis",
        "URLlinkAttribute": "x_axis",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/coordinate_value.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Asset_Identifier": {
        "returnAttributes": ["asset_identifier"],
        "constraintAttribute": "asset_identifier",
        "URLlinkAttribute": "asset_identifier",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/asset_identifier.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Barcode": {
        "returnAttributes": ["barcode"],
        "constraintAttribute": "barcode",
        "URLlinkAttribute": "barcode",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/barcode.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Category": {
        "returnAttributes": ["category"],
        "constraintAttribute": "category",
        "URLlinkAttribute": "category",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/categor.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Company": {
        "returnAttributes": ["name", "department", "organization_code"],
        "constraintAttribute": "name",
        "URLlinkAttribute":"name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/company.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Contact_Info": {
        "returnAttributes": ["phone", "address_street", "town", "postal_code", "postal_box", "state", "country"],
        "constraintAttribute": "phone",
        "URLlinkAttribute": "phone",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/contact.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Created_By": {
        "returnAttributes": ["created_by"],
        "constraintAttribute": "created_by",
        "URLlinkAttribute": "created_by",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/created_by.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Created_On": {
        "returnAttributes": ["created_on"],
        "constraintAttribute": "created_on",
        "URLlinkAttribute": "created_on",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/created_on.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Description": {
        "returnAttributes": ["description"],
        "constraintAttribute": "description",
        "URLlinkAttribute": "description",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/description.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Duration": {
        "returnAttributes": ["duration", "unit"],
        "constraintAttribute": "duration",
        "URLlinkAttribute": "duration",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/duration.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Expected_Life": {
        "returnAttributes": ["duration", "expected_life"],
        "constraintAttribute": "duration",
        "URLlinkAttribute": "duration",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/battery.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "File_Name": {
        "returnAttributes": ["file_name"],
        "constraintAttribute": "file_name",
        "URLlinkAttribute": "file_name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/file_name.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Frequency": {
        "returnAttributes": ["frequency"],
        "constraintAttribute": "frequency",
        "URLlinkAttribute": "frequency",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/frequency.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Geometry": {
        "returnAttributes": ["usable_height", "gross_area", "net_area"],
        "constraintAttribute": "gross_area",
        "URLlinkAttribute": "gross_area",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/geometry.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Installation_Date": {
        "returnAttributes": ["installation_date"],
        "constraintAttribute": "installation_date",
        "URLlinkAttribute": "installation_date",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/installation.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Job_Status": {
        "returnAttributes": ["job_status"],
        "constraintAttribute": "job_status",
        "URLlinkAttribute":"job_status",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/job_status.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Model_Number": {
        "returnAttributes": ["number", "reference"],
        "constraintAttribute": "number",
        "URLlinkAttribute": "number",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/model_number.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Part_Number": {
        "returnAttributes": ["part_number"],
        "constraintAttribute": "part_number",
        "URLlinkAttribute": "part_number",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/part_number.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Performance": {
        "returnAttributes": ["accessibility_perf", "sustainability_perf", "code_perf"],
        "constraintAttribute": "accessibility_perf",
        "URLlinkAttribute": "accessibility_perf",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/performance.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Person": {
        "returnAttributes": ["first_name", "last_name"],
        "constraintAttribute": "last_name",
        "URLlinkAttribute": "last_name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/person.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Project_Info": {
        "returnAttributes": ["project_name", "site_name", "phase"],
        "constraintAttribute": "project_name",
        "URLlinkAttribute": "project_name",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/info.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Replacement_Cost": {
        "returnAttributes": ["cost"],
        "constraintAttribute": "cost",
        "URLlinkAttribute": "cost",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/cost.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Room_Tag": {
        "returnAttributes": ["room_tag"],
        "constraintAttribute": "room_tag",
        "URLlinkAttribute" :"room_tag",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/room.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Serial_Number": {
        "returnAttributes": ["serial_number"],
        "constraintAttribute": "serial_number",
        "URLlinkAttribute": "serial_number",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/serial.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Specifications": {
        "returnAttributes": ["size", "features", "color", "finish", "grade", "material", "shape", "constituents"],
        "constraintAttribute": "features",
        "URLlinkAttribute" :"features",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/specifications.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Stage": {
        "returnAttributes": ["stage"],
        "constraintAttribute": "stage",
        "URLlinkAttribute" :"stage",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/stage.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Start": {
        "returnAttributes": ["unit", "start_date"],
        "constraintAttribute": "start_date",
        "URLlinkAttribute": "start_date",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/start.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Tag_Number": {
        "returnAttributes": ["tag_number"],
        "constraintAttribute": "tag_number",
        "URLlinkAttribute": "tag_number",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/tagno.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Task_Number": {
        "returnAttributes": ["number"],
        "constraintAttribute": "number",
        "URLlinkAttribute": "number",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/taskno.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Units": {
        "returnAttributes": ["number"],
        "constraintAttribute": "number",
        "URLlinkAttribute": "number",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/units.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Value": {
        "returnAttributes": ["unit", "value"],
        "constraintAttribute": "value",
        "URLlinkAttribute" :"value",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/value.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Warranty_Duration": {
        "returnAttributes": ["for_parts", "for_labors", "warranty_desc", "duration_unit"],
        "constraintAttribute": "for_parts",
        "URLlinkAttribute": "for_parts",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/warranty.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    },
    "Warranty_Start": {
        "returnAttributes": ["warranty_start"],
        "constraintAttribute": "warranty_start",
        "URLlinkAttribute": "warranty_start",
        "getDisplayType": function (node) {
            return visualynk.provider.NodeDisplayTypes.IMAGE;
        },
        "getImagePath": function (node) {
            return "img/war_start.png"
        },
        "getImageWidth": function (node) {
            return 50;
        },
        "getImageHeight": function (node) {
            return 50;
        }
    }
};

// BURAYA SONUCLARI GOSTERECEGIN FONKSIYONLARI YAZ

function displayResults_email(pElmt) {
    var table = pElmt.append("table").attr("class", "result-table");
    var tr = table.append("tr").attr("id", "row1");
        tr.append("td").append("h4").append("a").attr("href", function(d) {
            var prefix = "mailto:%s";
            var query_results = d.attributes.email1;
            var end_result = prefix.replace("%s", query_results);
            return end_result;
        }).text(function (d){
            return d.attributes.email1;
        });
}

function displayResults_document(pElmt) {
    var table = pElmt.append("table").attr("class", "result-table");
    var tr = table.append("tr").attr("id", "row1");
        tr.append("td").append("h4").append("a").attr("href", function(d) {
            if (d.attributes.link) {
                return d.attributes.link;
            } else {
                return "#";
            }
        }).text(function (d){
            return d.attributes.name;
        });
}

    // GENEL GORSEL OZELLIKLER. BAGLANTILARA TIKLAMA ICIN YAZILARI YUKARI KAYDIRDIM
visualynk.graph.LINK_DISTANCE = 80;
visualynk.graph.node.BACK_CIRCLE_R = 30;
visualynk.graph.node.TEXT_Y = -30;
visualynk.graph.node.NODE_MAX_CHARS = 20;

visualynk.result.onTotalResultCount(function (count) {
        d3.select("#rescount").text(function (d) {
            return "(" + count + ")";
        })
    });

visualynk.query.RESULTS_PAGE_SIZE = 1000;

visualynk.logger.LEVEL = visualynk.logger.LogLevels.INFO;

visualynk.start("FACILITY");