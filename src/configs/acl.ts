import { AbilityBuilder, Ability } from '@casl/ability';

export type Subjects = string;
export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';

export type AppAbility = Ability<[Actions, Subjects]> | undefined;

export const AppAbility = Ability as any;

export type ACLObj = {
  action: Actions;
  subject: string;
};

/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purposes where
 * admin can manage everything and the client can just visit ACL pages.
 */

const defineRulesFor = (role: string, subject: string) => {
  const { can, cannot, rules } = new AbilityBuilder(AppAbility);

  if (role === 'admin' ) {
    can('manage', 'all');
  } else if (role === 'SuperAdmin') {
    can('manage', 'all');
  } else if (role === 'Doctor') {
    can('manage', 'all');
  } else if (role === 'Pharmacist') {
    can('manage', 'acl-page');
    cannot('read', 'acl-page', { page: 'pathology' });
    cannot('read', 'acl-page', { page: 'radiology' });
  } else if (role === 'Pathologist') {
    can('manage', 'acl-page');
    cannot('read', 'acl-page', { page: 'pharmacy' });
    cannot('read', 'acl-page', { page: 'radiology' });
  } else if (role === 'Radiologist') {
    can('manage', 'acl-page');
    cannot('read', 'acl-page', { page: 'pathology' });
    cannot('read', 'acl-page', { page: 'pharmacy' });
  } else if (role === 'Accountant') {
    can('manage', 'all');
  } else if (role === 'Receptionist') {
    can('manage', 'all');
  } else if (role === 'Nurse') {
    can('manage', 'acl-page');
  }
  else {
    can(['read', 'create', 'update', 'delete'], subject);
  }

  return rules;
};

export const buildAbilityFor = (role: string, subject: string): AppAbility => {
  return new AppAbility(defineRulesFor(role, subject), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    // @ts-ignore
    detectSubjectType: (object) => object!.type,
  });
};

export const defaultACLObj: ACLObj = {
  action: 'manage',
  subject: 'all',
};

export default defineRulesFor;
