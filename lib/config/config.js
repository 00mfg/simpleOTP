import { nsfeature } from "./feature.js";
import { ldapaction1, ldapaction2, ldapaction3 } from "./ldapaction.js";
import { aaaglobal } from "./aaaglobal.js";
import {
  authpol1,
  authpol2,
  authpol3,
  authpol4,
  authpol5,
  authpol6,
} from "./authpolicy.js";

import { ls1, ls2 } from "./loginschema.js";

import {
  pl1,
  pl2,
  pl3,
  pl4,
  pl5,
  bindpl1,
  bindpl2,
  bindpl3,
  bindpl4,
  bindpl5,
  bindpl6,
} from "./policylabel.js";

import {
  aaavs,
  bindpolicy,
  authnprofile,
  vsBindAuthnProfile,
} from "./aaavs.js";

const configs = {
  batchapi: [
    aaaglobal,
    nsfeature,
    ldapaction1,
    ldapaction2,
    ldapaction3,
    authpol1,
    authpol2,
    authpol3,
    authpol4,
    authpol5,
    authpol6,
    ls1,
    ls2,
    pl1,
    pl2,
    pl3,
    pl4,
    pl5,
    bindpl1,
    bindpl2,
    bindpl3,
    bindpl4,
    bindpl5,
    bindpl6,
    aaavs,
    bindpolicy,
    authnprofile,
    vsBindAuthnProfile,
  ],
};

export { configs };
