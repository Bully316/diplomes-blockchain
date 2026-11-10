window.CONFIG = {
  ADDRESS: "0x67132637CD8557f972Aeee3190887D6e1A7C01e4",
  DEPLOY_BLOCK: 12097989,
  RPC_URL: "https://ethereum-sepolia-rpc.publicnode.com",
  CHAIN_ID: 11155111,

  ABI: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "ancienneAdresse",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "nouvelleAdresse",
          type: "address"
        }
      ],
      name: "AdresseRecuperationModifiee",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "empreinte",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "universite",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "dateEmission",
          type: "uint256"
        }
      ],
      name: "DiplomeEmis",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "empreinte",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "universite",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "dateRevocation",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "string",
          name: "motif",
          type: "string"
        }
      ],
      name: "DiplomeRevoque",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "ancienneAdresse",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "nouvelleAdresse",
          type: "address"
        }
      ],
      name: "PortefeuilleUniversiteModifie",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "nouvelleAdresse",
          type: "address"
        }
      ],
      name: "changerAdresseRecuperation",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "empreinte",
          type: "bytes32"
        }
      ],
      name: "emettreDiplome",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "nouveauPortefeuille",
          type: "address"
        }
      ],
      name: "recupererAcces",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "empreinte",
          type: "bytes32"
        },
        {
          internalType: "string",
          name: "motif",
          type: "string"
        }
      ],
      name: "revoquerDiplome",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      inputs: [],
      name: "adresseRecuperation",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        }
      ],
      name: "diplomes",
      outputs: [
        {
          internalType: "bool",
          name: "existe",
          type: "bool"
        },
        {
          internalType: "bool",
          name: "revoque",
          type: "bool"
        },
        {
          internalType: "uint256",
          name: "dateEmission",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "dateRevocation",
          type: "uint256"
        },
        {
          internalType: "string",
          name: "motifRevocation",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        }
      ],
      name: "emetteurDiplome",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "obtenirAdresseRecuperation",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "obtenirPortefeuilleUniversite",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "universite",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      name: "universiteAutorisee",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "adresseUniversite",
          type: "address"
        },
        {
          internalType: "bytes32",
          name: "empreinte",
          type: "bytes32"
        }
      ],
      name: "verifierDiplome",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ]
};
