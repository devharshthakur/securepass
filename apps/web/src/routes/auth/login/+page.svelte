<script lang="ts">
	import { createForm } from '@tanstack/svelte-form';
	import GalleryVerticalEndIcon from '@lucide/svelte/icons/gallery-vertical-end';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import GithubIcon from '@iconify-svelte/mdi/github';
	import BaselineAppleIcon from '@iconify-svelte/ic/baseline-apple';

	const form = createForm(() => ({
		defaultValues: {
			email: '',
			password: ''
		},
		onSubmit: async ({ value }) => {
			// TODO: Submit login values to the authentication endpoint.
			void value;
		}
	}));

	function handleGithubLogin() {
		// TODO: Start Apple OAuth flow.
	}

	function handleGoogleLogin() {
		// TODO: Start Google OAuth flow.
	}
</script>

<main class="flex flex-1 items-center justify-center px-4 sm:px-6">
	<div class="w-full max-w-md">
		<form
			onsubmit={(event) => {
				event.preventDefault();
				event.stopPropagation();
				form.handleSubmit();
			}}
		>
			<div class="group/field-group @container/field-group flex w-full flex-col gap-5">
				<div class="flex flex-col items-center gap-2 text-center">
					<a href="##" class="flex flex-col items-center gap-2 font-medium">
						<div class="flex size-8 items-center justify-center rounded-md">
							<GalleryVerticalEndIcon class="size-6" />
						</div>
						<span class="sr-only">Acme Inc.</span>
					</a>
					<h1 class="text-xl font-bold">Welcome to Acme Inc.</h1>
					<p
						class="text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-[orientation=horizontal]/field:text-balance last:mt-0 nth-last-2:-mt-1 [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary [[data-variant=legend]+&]:-mt-1.5"
					>
						Don't have an account? <a href="##">Sign up</a>
					</p>
				</div>
				<form.Field name="email">
					{#snippet children(field)}
						<div
							role="group"
							data-slot="field"
							data-orientation="vertical"
							class="group/field flex w-full flex-col gap-2 *:w-full [&>.sr-only]:w-auto"
						>
							<label
								for={field.name}
								class="flex w-fit items-center gap-2 text-sm leading-snug font-medium select-none"
							>
								Email
							</label>
							<Input
								id={field.name}
								name={field.name}
								type="email"
								placeholder="m@example.com"
								autocomplete="email"
								required
								value={field.state.value}
								onblur={field.handleBlur}
								oninput={(event) =>
									field.handleChange(
										(event.currentTarget as HTMLInputElement).value
									)}
							/>
						</div>
					{/snippet}
				</form.Field>
				<form.Field name="password">
					{#snippet children(field)}
						<div
							role="group"
							data-slot="field"
							data-orientation="vertical"
							class="group/field flex w-full flex-col gap-2 *:w-full [&>.sr-only]:w-auto"
						>
							<label
								for={field.name}
								class="flex w-fit items-center gap-2 text-sm leading-snug font-medium select-none"
							>
								Password
							</label>
							<Input
								id={field.name}
								name={field.name}
								type="password"
								placeholder="••••••••"
								autocomplete="current-password"
								required
								value={field.state.value}
								onblur={field.handleBlur}
								oninput={(event) =>
									field.handleChange(
										(event.currentTarget as HTMLInputElement).value
									)}
							/>
						</div>
					{/snippet}
				</form.Field>
				<div
					role="group"
					data-slot="field"
					data-orientation="vertical"
					class="group/field flex w-full flex-col gap-2 *:w-full [&>.sr-only]:w-auto"
				>
					<Button type="submit">Login</Button>
				</div>
				<div class="relative -my-2 h-5 text-sm">
					<div class="absolute inset-0 top-1/2 h-px w-full shrink-0 bg-border"></div>
					<span
						class="relative mx-auto block w-fit bg-background px-2 text-muted-foreground"
					>
						Or
					</span>
				</div>
				<div
					role="group"
					data-slot="field"
					data-orientation="vertical"
					class="group/field grid w-full gap-4 sm:grid-cols-2"
				>
					<Button variant="outline" type="button" onclick={handleGithubLogin}>
						<BaselineAppleIcon height="1em" />
						Continue with Apple
					</Button>
					<Button variant="outline" type="button" onclick={handleGoogleLogin}>
						<GithubIcon height="1em" />
						Continue with Github
					</Button>
				</div>
			</div>
		</form>
		<p
			class="px-6 py-4 text-center text-sm leading-normal font-normal text-muted-foreground group-has-data-[orientation=horizontal]/field:text-balance last:mt-0 nth-last-2:-mt-1 [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary [[data-variant=legend]+&]:-mt-1.5"
		>
			By clicking continue, you agree to our <a href="##">Terms of Service</a> and
			<a href="##">Privacy Policy</a>.
		</p>
	</div>
</main>
