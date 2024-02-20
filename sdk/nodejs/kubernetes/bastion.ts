// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import * as pulumiKubernetes from "@pulumi/kubernetes";

export class Bastion extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'tailscale-bastion:kubernetes:Bastion';

    /**
     * Returns true if the given object is an instance of Bastion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Bastion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Bastion.__pulumiType;
    }

    /**
     * The name of the kubernetes deployment that contains the tailscale bastion
     */
    public /*out*/ readonly deploymentName!: pulumi.Output<string>;

    /**
     * Create a Bastion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BastionArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.createNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'createNamespace'");
            }
            if ((!args || args.highAvailability === undefined) && !opts.urn) {
                throw new Error("Missing required property 'highAvailability'");
            }
            if ((!args || args.routes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routes'");
            }
            if ((!args || args.tailscaleTags === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tailscaleTags'");
            }
            resourceInputs["createNamespace"] = args ? args.createNamespace : undefined;
            resourceInputs["highAvailability"] = (args ? args.highAvailability : undefined) ?? false;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["routes"] = args ? args.routes : undefined;
            resourceInputs["tailscaleTags"] = args ? args.tailscaleTags : undefined;
            resourceInputs["deploymentName"] = undefined /*out*/;
        } else {
            resourceInputs["deploymentName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Bastion.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a Bastion resource.
 */
export interface BastionArgs {
    /**
     * Whether we should create a new namespace.
     */
    createNamespace: boolean;
    /**
     * Whether the bastion should be highly available.
     */
    highAvailability: pulumi.Input<boolean>;
    /**
     * The bucket resource.
     */
    namespace?: pulumi.Input<pulumiKubernetes.core.v1.Namespace>;
    /**
     * The routes to advertise to tailscale. This is likely the Pod and Service CIDR.
     */
    routes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The tags to apply to the tailnet device andauth key. This tag should be added to your oauth key and ACL.
     */
    tailscaleTags: pulumi.Input<pulumi.Input<string>[]>;
}
