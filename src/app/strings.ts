export enum Capability{
    DAMAGE,
    IMPACT,
    ATTACK,
    FEASIB,
    RISKTREAT
}

export const capabilities = [
    {
        name: 'Damage Scenarios Identification',
        explanation: 'Part of the asset identification task. Identify a damage scenario for each compromised cybersecurity asset of the item.',
        kind: Capability.DAMAGE
    },{
        name: 'Impact Rating',
        explanation: 'Determine the impact of each damage scenario in the Safety (S), Financial (F), Operational (O), and Privacy (P) categories as a rating.',
        kind: Capability.IMPACT
    },{
        name: 'Attack Path Analysis',
        explanation: 'Identify the attack paths that implement each threat scenario.',
        kind: Capability.ATTACK
    },{
        name: 'Feasibility Rating',
        explanation: 'Determine the attack feasibility for each attack path.',
        kind: Capability.FEASIB
    },{
        name: 'Risk Treatment Decision',
        explanation: 'Determine a risk treatment option for each threat scenario by considering its calculated risk value. The available options are to avoid, reduce, share, or retain the risk.',
        kind: Capability.RISKTREAT
    },
]

export enum CapabilityLevel{
    Undefined,
    Adhoc,
    Completeness,
    Integration,
    Augmentation
}

export const capabilityLevels = [
    {
        name: 'Undefined',
        question: 'No external data sources are used for this data-driven TARA section.',
        color: '#eb4034'
    },{
        name: 'Ad hoc',
        question: 'Do you use external data sources on an ad hoc basis for this data-driven TARA section?',
        color: '#eb4034'
    },{
        name: 'Standardization',
        question: 'Are you using a standard pool of data sources for this data-driven TARA section?',
        color: '#eb8f34'
    },{
        name: 'Integration',
        question: 'Is the pool of data sources integrated into the TARA creation process and accessible to this data-driven TARA section?',
        color: '#dfeb34'
    },{
        name: 'Augmentation',
        question: 'Is there a monitoring in place to scan data sources for information that could lead to a reassessment of risk or a redefinition of risk treatment options for this data-driven TARA section?',
        color: '#3aeb34'
    },
]

export enum MaturityLevel{
    None,
    Initial,
    Core,
    Extended,
    Visionary
  }

export const maturityLevels = [
    {
        name: 'None',
        explanation: '',
        kind: MaturityLevel.None
    },{
        name: 'Initial',
        explanation: '',
        kind: MaturityLevel.Initial
    },{
        name: 'Core',
        explanation: '',
        kind: MaturityLevel.Core
    },{
        name: 'Extended',
        explanation: '',
        kind: MaturityLevel.Extended
    },{
        name: 'Visionary',
        explanation: '',
        kind: MaturityLevel.Visionary
    }
]