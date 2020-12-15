events.listen('item.tags', function (event) {
    var items = [
        'aquaculture:neptunium_pickaxe',
        'botania:elementium_pickaxe',
        'botania:glass_pickaxe',
        'botania:manasteel_pick',
        'botania:terra_pick',
        'immersiveengineering:pickaxe_steel',
        'mekanismtools:bronze_pickaxe',
        'mekanismtools:lapis_lazuli_pickaxe',
        'mekanismtools:osmium_pickaxe',
        'mekanismtools:refined_glowstone_pickaxe',
        'mekanismtools:refined_obsidian_pickaxe',
        'mekanismtools:steel_pickaxe',
        'minecraft:diamond_pickaxe',
        'minecraft:golden_pickaxe',
        'minecraft:iron_pickaxe',
        'minecraft:netherite_pickaxe',
        'minecraft:stone_pickaxe',
        'minecraft:wooden_pickaxe',
        'mythicbotany:alfsteel_pick',
        'naturesaura:infused_iron_pickaxe',
        'naturesaura:sky_pickaxe'
    ];
    event.get('forge:tools').add(items);
    event.get('forge:tools/pickaxe').add(items);
});
