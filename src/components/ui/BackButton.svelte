<script lang="ts">
  import BackIcon from '../../assets/back.svg';

  let { back }: { back: string } = $props();
</script>

<div>
  <a href={back} class="flex gap-2 items-center"><img src={BackIcon} alt="back" class="h-5 w-5"/><span>Go Back</span></a>
</div>